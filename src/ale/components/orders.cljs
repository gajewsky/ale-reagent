(ns ale.components.orders
  (:require [ale.state :as state]
            [ale.helpers :refer [format-price]]))

(defn remove-order
  [id]
  (swap! state/orders dissoc id))

(defn remove-all
  []
  (reset! state/orders {}))

(defn total
  []
  (->> @state/orders
       (map (fn[[id quantity]] (* quantity (get-in @state/beers [id :price]))))
       (reduce +)))

(defn order-component
  [id quantity]
  (let [{:keys [img name price]} (get @state/beers id)]
    [:div.item {:key id}
     [:div.img
      [:img {:src img}]]
     [:div.content
      [:p.title (str name " \u00D7 " quantity)]
      [:div.action
       [:div.price (format-price (* price quantity))]
       [:button.btn.btn--link.tooltip
        {:data-tooltip "Remove"
         :on-click #(remove-order id)}
        [:i.icon.icon--cross]]]]]))

(defn order-list
  []
  [:div
   [:div.order
    [:div.body
     (for [[id quantity] @state/orders]
       (order-component id quantity))]]

   [:div.total
    [:hr]
    [:div.item
     [:div.content "Total"]
     [:div.action
      [:div.price (format-price (total))]]
     [:button.btn.btn--link.tooltip
      {:data-tooltip "Remove all"
       :on-click #(remove-all)}
      [:i.icon.icon--delete]]]]])

(defn orders
  []
  [:aside
   (if (empty? @state/orders)
     [:div.empty
      [:div.title "You don't have any orders"]
      [:div.subtitle "Click on a + to add an order"]]
     (order-list))])
