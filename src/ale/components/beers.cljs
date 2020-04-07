(ns ale.components.beers
  (:require [ale.state :as state]))

(defn beer-component
  [beer]
  [:div.beer {:key (:id beer)}
   [:img.beer__artwork {:src (:img beer) :alt (:name beer)}]
   [:div.beer__body
    [:div.beer__name
     [:div.btn.btn--primary.float--right.tooltip {:data-tooltip "Add to cart"}]
     [:i.icon.icon--plus] (:name beer)]
    [:p.beer__price (:price beer)]
    [:p.beer_desc (:desc beer)]]])

(defn beers
  []
  [:main
   [:div.beers (map (fn [beer] (beer-component beer)) (vals @state/beers))]])


