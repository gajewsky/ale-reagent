(ns ale.core
  (:require [reagent.core :as r]
            [ale.api :as api]
            [ale.components.header :refer [header]]
            [ale.components.beers  :refer [beers]]
            [ale.components.orders :refer [orders]]
            [ale.components.footer :refer [footer]]
            [ale.fb.init :refer [firebase-init]]
            ))

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
  (api/fetch-beers)
  (r/render
    [app]
    (.getElementById js/document "app"))
  (firebase-init))
