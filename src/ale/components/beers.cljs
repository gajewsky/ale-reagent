(ns ale.components.beers
  (:require [ale.state :as state]
            [ale.helpers :refer [format-price]]))

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
  [:main
   [:div.beers
    (for [beer (vals @state/beers)]
      (beer-component beer))]])


