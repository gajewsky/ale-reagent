(ns ale.components.admin-panel
  (:require [ale.state :as state]
            [ale.fb.db :refer [db-save!]]))

(defn admin-panel
  []
  [:div.admin-panel
   [:button.btn.btn--primary
    {:styles {:width "100%"}
     :on-click #(db-save! ["beers"] (clj->js @state/beers))}
    "Publish"]])
