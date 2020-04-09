(ns ale.components.beer-editor)

(defn form-group
  [{:keys [id type value values]}]
  (let [update-form #(swap! values assoc (keyword id) (.. % -target -value))]
    [:div.form__group
     [:label.form__label {:for id} id]
     [:input.form__input {:type type
                          :id id
                          :value value
                          :on-change update-form }]]))

(defn beer-editor
  [{:keys [modal values save-beer toggle-modal initial-values]}]

  (let [{:keys [name desc img price sold-out]} @values]

    [:div.modal (when (:active @modal) {:class "active"})
     [:div.modal__overlay]
     [:div.modal__container
      [:div.modal__body
       [form-group {:id "name"
                    :type "text"
                    :value  name
                    :values values}]
       [form-group {:id "desc"
                    :type "text"
                    :value desc
                    :values values}]
       [form-group {:id "img"
                    :type "text"
                    :value img
                    :values values}]
       [form-group {:id "price"
                    :type "number"
                    :value price
                    :values values}]
       [:div.form__group
        [:label.form__label {:for "sold-out"} "sold-out"]
        [:label.form__switch
         [:input {:type :checkbox
                  :checked sold-out
                  :on-change #(swap! values assoc :sold-out (.. % -target -checked))}]
         [:i.form__icon]]]]
      [:div.modal__footer
       [:button.btn.btn--link.float--left
        {:on-click #(toggle-modal {:active false :beer initial-values})}
        "Cancel"]
       [:button.btn.btn--secondary
        {:on-click #(save-beer @values)}
        "Save"]]]]))

