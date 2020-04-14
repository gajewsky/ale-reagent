(ns ale.components.header
  (:require [ale.fb.auth :as auth]
            [ale.state :as state]))

(defn header
  []
  [:header
   [:img.logo {:src "img/ale-logo.svg" :alt "Ale logo"}]
   (if @state/user
     [:button.btn.btn--link.float--right.tooltip
      {:data-tooltip "Sing out"
       :on-click #(auth/sign-out)}
      [:figure.avatar
       [:img {:src (:photo-url @state/user)}]]]
     [:button.btn.btn--link.float--right
      {:on-click #(auth/sign-in-with-google)}
      "Login"])])
