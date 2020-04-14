(ns ale.fb.init
  (:require ["firebase/app" :as firebase]
            ["firebase/database"]
            ["firebase/auth"]))

(defn firebase-init
  []
  (if (zero? (alength firebase/apps))
    (firebase/initializeApp
      #js
      {:apiKey "AIzaSyDn9mBUnFMP14U-8YT1cM3zKb2yllTXhs4"
       :authDomain "ale-reagent.firebaseapp.com"
       :databaseURL "https://ale-reagent.firebaseio.com"
       :projectId "ale-reagent"})
    (firebase/app)))
