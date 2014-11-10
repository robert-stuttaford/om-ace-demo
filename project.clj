(defproject om-ace-demo "0.1.0-SNAPSHOT"
  :description "Example integration of the Ace editor into an Om application"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2280"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [om "0.7.3"]
                 [sablono "0.2.22" :exclusions [com.facebook/react]]
                 [prismatic/om-tools "0.3.6" :exclusions [org.clojure/clojure]]]
  :plugins [[lein-cljsbuild "1.0.3"]]
  :cljsbuild
  {:builds
   [{:source-paths ["src"]
     :compiler
     {:optimizations :none
      :pretty-print true
      :source-map true
      :output-to "out/om-ace-demo.js"
      :output-dir "out"}}]})
