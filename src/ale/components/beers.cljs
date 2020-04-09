(ns ale.components.beers
  (:require [ale.state :as state]
            [ale.helpers :refer [format-price]]
            [reagent.core :as r]
            [ale.components.beer-editor :refer [beer-editor]]))

(defn beer-component
  [beer]
  (let [{:keys [id img desc price name]} beer
        add-to-cart #(swap! state/orders update (:id beer) inc)]

    [:div.beer {:key id}
     [:img.beer__artwork {:src img :alt name}]
     [:div.beer__body
      [:div.beer__name
       [:div.btn.btn--primary.float--right.tooltip
        {:data-tooltip "Add to cart"
         :on-click #(add-to-cart)}
        [:i.icon.icon--plus]] name ]
      [:p.beer__price (format-price price)]
      [:p.beer_desc desc]]]))

(defn beers
  []
  (let [modal (r/atom false)
        values (r/atom
                 {:id nil
                  :title ""
                  :desc ""
                  :price 0
                  :img ""
                  :sold-out false})]
    (fn
      []
      [:main
       [:div.gigs
        [:button.add-gig
         {:on-click #(reset! modal true)}
         [:div.add__title
          [:i.icon.icon--plus]
          [:p "Add gig"]]]
        [beer-editor modal values]
        (for [beer (vals @state/beers)]
          [beer-component beer])]])))


