(ns ale.components.beers
  (:require [ale.state :as state]
            [ale.helpers :refer [format-price]]))

(defn add-to-cart
  [beer]
  (swap! state/orders update (:id beer) inc)
  (.log js/console "Hello, world!"))

(defn beer-component
  [beer]
  [:div.beer {:key (:id beer)}
   [:img.beer__artwork {:src (:img beer) :alt (:name beer)}]
   [:div.beer__body
    [:div.beer__name
     [:div.btn.btn--primary.float--right.tooltip
      {:data-tooltip "Add to cart"
       :on-click #(add-to-cart beer)}
     [:i.icon.icon--plus]] (:name beer) ]
    [:p.beer__price (format-price (:price beer))]
    [:p.beer_desc (:desc beer)]]])


(defn beers
  []
  [:main
   [:div.beers
    (for [beer (vals @state/beers)]
      (beer-component beer))]])


