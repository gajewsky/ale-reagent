(ns ale.helpers)

(defn format-price
  [cents]
  (str " $" (/ cents 100)))
