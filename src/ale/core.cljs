(ns ale.core
  (:require [reagent.core :as r]
            [ale.components.header :refer [header]]
            [ale.components.beers  :refer [beers]]
            [ale.components.orders :refer [orders]]
            [ale.components.footer :refer [footer]]
            [ale.fb.init :refer [firebase-init]]
            [ale.fb.db :refer [db-subscribe]]))

(defn app
  []
  [:div.container
   [header]
   [beers]
   [orders]
   [footer]
   ]
  )

(defn ^:export main
  []
  (r/render
    [app]
    (.getElementById js/document "app"))
  (firebase-init)
  (db-subscribe ["beers"]))
