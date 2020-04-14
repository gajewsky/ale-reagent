(ns ale.components.beers
  (:require [ale.state :as state]
            [ale.helpers :refer [format-price]]
            [ale.components.beer-editor :refer [beer-editor]]
            [reagent.core :as r]
            [clojure.string :as str]
            [ale.fb.db :refer [db-save!]]))

(defn beer-component
  [beer toggle-modal]
  (let [{:keys [id img desc price name sold-out]} beer
        add-to-cart #(swap! state/orders update (keyword id) inc)
        short-desc (str (subs desc 0 50) "...")]

    [:div.beer {:key id}
     [:img.beer__artwork {:class (when @state/user "beer__edit")
                                     :src img
                                     :alt name
                                     :on-click (when @state/user #(toggle-modal {:active true
                                                               :beer beer}))}]
     [:div.beer__body
      [:div.beer__name
       (if sold-out
         [:div.sold-out.float--right "Soldout"]
         [:div.btn.btn--primary.float--right.tooltip
          {:data-tooltip "Add to cart"
           :on-click #(add-to-cart)}
          [:i.icon.icon--plus]]) name]
      [:p.beer__price (format-price price)]
      [:p.beer_desc short-desc]]]))

(defn beers
  []
  (let [modal (r/atom {:active false})
        initial-values {:id nil
                        :name ""
                        :desc ""
                        :price 0
                        :img ""
                        :sold-out false}
        values (r/atom initial-values)

        toggle-modal (fn
                       [{:keys [active beer]}]
                       (swap! modal assoc :active active)
                       (reset! values beer))

            save-beer (fn [{:keys [id name desc price img sold-out]}]
                     (let [id (or id (str "beer-" (random-uuid)))]
                       (db-save! ["beers" id] #js {:id id
                                                  :name (str/trim name)
                                                  :desc (str/trim desc)
                                                  :img (str/trim img)
                                                  :price (js/parseInt price)
                                                  :sold-out sold-out}))
                     (toggle-modal {:active false :beer initial-values}))]
    (fn
      []
      [:main
       [:div.beers
        (when @state/user
          [:button.add-beer
           {:on-click #(toggle-modal {:active true :beer initial-values})}
           [:div.add__name
            [:i.icon.icon--plus]
            [:p "Add beer"]]])
        [beer-editor
         {:modal modal
          :values values
          :save-beer save-beer
          :toggle-modal toggle-modal
          :initial-values initial-values}]
        (for [beer (vals @state/beers)]
          [beer-component beer toggle-modal])]])))


