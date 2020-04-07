(ns ale.state
  (:require [reagent.core :as r]))

(def beers (r/atom {
                    :beer-01 {:id :beer-01
                              :name "Up Above"
                              :desc "Collab with our friends from Maltgarden. Hazy IPA double dry hopped with Citra, Amarillo, El Dorado & Zythos."
                              :img "https://res.cloudinary.com/ratebeer/image/upload/d_beer_img_default.png,f_auto/beer_818884"
                              :price 1000
                              :brewery "Funky Fluid"}
                    }))
