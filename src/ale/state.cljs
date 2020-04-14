(ns ale.state
  (:require [reagent.core :as r]))

(def beers (r/atom {}))

(def orders (r/atom {}))

(def user (r/atom nil))
