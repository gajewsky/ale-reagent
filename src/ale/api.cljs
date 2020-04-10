(ns ale.api
  (:require [ajax.core :refer [GET]]
            [ale.state :as state]))

(defn index-by
  "Transform a coll to a map with a given key as a lookup value"
  [key coll]
  (->> coll
       (map (juxt key identity))
       (into {})))

(defn handler [response]
  (reset! state/beers (index-by :id response)))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(defn fetch-beers
  []
  (GET "https://gist.githubusercontent.com/gajewsky/316175764c283edef98c0691a323ccac/raw/c662abd3919a66efed4ee9c339466248505b179c/beers.json"

       {:handler handler
        :error-handler error-handler
        :response-format :json
        :keywords? true}))
