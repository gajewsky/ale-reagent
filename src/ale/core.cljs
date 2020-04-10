(ns ale.core
  (:require [reagent.dom :as r]
            [ale.api :as api]
            [ale.components.header :refer [header]]
            [ale.components.beers  :refer [beers]]
            [ale.components.orders :refer [orders]]
            [ale.components.footer :refer [footer]]
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
    (.getElementById js/document "app")))
