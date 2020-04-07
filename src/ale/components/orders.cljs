(ns ale.components.orders
  (:require [ale.state :as state]))

(defn order-component
  [id quantity]
  (let [{:keys [img name price]} (get @state/beers id)]
    [:div.item {:key id}
     [:div.img
      [:img {:src img}]]
     [:div.content
      [:p.title (str name " \u00D7 " quantity)]
      [:div.action
       [:div.price (* price quantity)]]]]))

(defn orders
  []
  [:aside
   [:div.order
    [:div.body
     (for [[id quantity] @state/orders]
       (order-component id quantity))]]])
