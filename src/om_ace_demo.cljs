(ns om-ace-demo
  (:require [cljs.core.async :refer [chan <! put!]]
            [om.core :as om :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [sablono.core :as html :refer-macros [html]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def *ace* (atom nil))
(defn set-value! [ace value]
  (let [cursor (.getCursorPositionScreen @ace)]
    (.setValue @ace value cursor)))


(defn change-handler [owner ace]
  (->> (.getValue @ace)
       (om/set-state-nr! owner :edited-value)))

(defcomponent editor-area [data owner]
  (init-state [_] {:ace (atom nil)})
  (render [_]
    (html [:div#ace {:style {:height "400px"}}]))
  (will-mount [_]
    (let [editor-chan (om/get-state owner :editor-chan)]
      (go
        (while true
          (when (= :save! (<! editor-chan))
            (when-let [edited-value
                       (om/get-state owner :edited-value)]
              (om/update! data :value edited-value)))))))
  (did-mount [_]
    (let [ace-instance (.edit js/ace (om/get-node owner))]
      (-> (om/get-state owner :ace)
          (reset! ace-instance))
      (.. ace-instance
          getSession
          (on "change" #(change-handler owner (om/get-state owner :ace))))
      (set-value! (om/get-state owner :ace) (:value data))))
  (will-update [_ next-data next-state]
    (set-value! (om/get-state owner :ace) (:value next-data))))

(defcomponent editor [data owner]
  (init-state [_] {:editor-chan (chan)})
  (render-state [_ {:keys [editor-chan]}]
    (html
     [:div
      [:button {:onClick #(put! editor-chan :save!)} "Save"]
      (->editor-area data
                     {:init-state
                      {:editor-chan editor-chan}})])))

(defcomponent app [data owner]
  (render [_]
    (html
     [:div
      [:pre "Raw state: " (pr-str data)]
      (->editor data)])))

(om/root app
         {:value "Welcome to Ace in Om!"}
         {:target (.getElementById js/document "app")})
