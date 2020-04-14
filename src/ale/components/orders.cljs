(ns ale.components.orders
  (:require [ale.state :as state]
            [ale.helpers :refer [format-price]]
            [ale.components.checkout-modal :refer [checkout-modal]]
            [ale.components.admin-panel :refer [admin-panel]]))



(defn order-component
  [id quantity]
  (let [{:keys [img name price]} (get @state/beers id)
        remove-order #(swap! state/orders dissoc id)]

    [:div.item {:key id}
     [:div.img
      [:img {:src img}]]
     [:div.content
      [:p.title (str name " \u00D7 " quantity)]
      [:div.action
       [:div.price (format-price (* price quantity))]
       [:button.btn.btn--link.tooltip
        {:data-tooltip "Remove"
         :on-click #(remove-order)}
        [:i.icon.icon--cross]]]]]))

(defn orders-list
  []
  (let [remove-all #(reset! state/orders {})
        total #(->> @state/orders
                    (map (fn[[id quantity]] (* quantity (get-in @state/beers [id :price]))))
                    (reduce +))]

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
        [:i.icon.icon--delete]]]
      [checkout-modal]]]))

(defn orders
  []
  [:aside
   [admin-panel]
   (if (empty? @state/orders)
     [:div.empty
      [:div.title "You don't have any orders"]
      [:div.subtitle "Click on a + to add an order"]]
     (orders-list))])
