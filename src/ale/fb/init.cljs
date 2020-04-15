(ns ale.fb.init
  (:require ["firebase/app" :as firebase]
            ["firebase/database"]
            ["firebase/auth"]
            [ale.fb.auth :refer [on-auth-state-changed]]))

(defn firebase-init
  []
  (firebase/initializeApp
    #js {:apiKey "AIzaSyDn9mBUnFMP14U-8YT1cM3zKb2yllTXhs4"
         :authDomain "ale-reagent.firebaseapp.com"
         :databaseURL "https://ale-reagent.firebaseio.com"
         :projectId "ale-reagent"})
  (on-auth-state-changed))
