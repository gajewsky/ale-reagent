(ns ale.components.orders
  (:require [ale.state :as state]))

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
       [:div.price (* price quantity)]
       [:button.btn.btn--link.tooltip
        {:data-tooltip "Remove"
         :on-click #(remove-order id)}
        [:i.icon.icon--cross]]]]]))

(defn orders
  []
  [:aside
   [:div.order
    [:div.body
     (for [[id quantity] @state/orders]
       (order-component id quantity))]]

   [:div.total
    [:hr]
    [:div.item
     [:div.content "Total"]
     [:div.action
      [:div.price (total)]]
     [:button.btn.btn--link.tooltip
      {:data-tooltip "Remove all"
       :on-click #(remove-all)}
      [:i.icon.icon--delete]]]]])
