(ns ale.state
  (:require [reagent.core :as r]))

(def beers (r/atom {
                    :beer-01 {:id :beer-01
                              :name "Black Currant Sour"
                              :desc "Warszawski browar kontraktowy Funky Fluid prezentuje nam swoje nowe piwo – Black Currant Sour."
                              :img "https://kraftklub.pl/wp-content/uploads/2020/04/funky-fluid-black-currant-sour.jpg"
                              :price 960
                              :brewery "Funky Fluid"}
                    :beer-02 {:id :beer-02
                              :name "Toucan"
                              :desc "Kolejny wypust Browaru Nepomucen to Tropical India Pale Ale, czyli Toucan"
                              :img "https://kraftklub.pl/wp-content/uploads/2019/09/nepomucen-toucan-min.jpg"
                              :price 1090
                              :brewery "Nepomucen"}}))

(def orders (r/atom {}))
