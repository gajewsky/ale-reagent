(ns ale.state
  (:require [reagent.core :as r]))

(def beers (r/atom {}))

(def orders (r/atom {}))
