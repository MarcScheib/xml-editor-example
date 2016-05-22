System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  map: {
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1.2.1",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
    "aurelia-dialog": "npm:aurelia-dialog@0.6.1",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.5",
    "aurelia-syntax-highlighter": "npm:aurelia-syntax-highlighter@0.0.4",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "bootstrap": "github:twbs/bootstrap@4.0.0-alpha.2",
    "core-js": "npm:core-js@1.2.6",
    "dragula": "npm:dragula@3.7.1",
    "font-awesome": "github:FortAwesome/font-awesome@4.6.3",
    "jquery": "github:components/jquery@2.2.1",
    "text": "github:systemjs/plugin-text@0.0.4",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:twbs/bootstrap@4.0.0-alpha.2": {
      "jquery": "npm:jquery@2.2.4",
      "tether": "github:HubSpot/tether@1.3.2"
    },
    "npm:assert@1.4.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-shims": "npm:buffer-shims@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-binding@1.0.0-beta.1.3.6": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-bootstrapper@1.0.0-beta.1.2.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.2.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.5",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.1",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.2.1",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.2.2",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.2.1",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.1.4",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.3",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.7",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.2.4",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.2.6",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-dialog@0.6.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.7"
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.1.2.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-framework@1.0.0-beta.1.2.5": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.6",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.7"
    },
    "npm:aurelia-history-browser@1.0.0-beta.1.2.1": {
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-loader-default@1.0.0-beta.1.2.2": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-loader@1.0.0-beta.1.2.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-logging-console@1.0.0-beta.1.2.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-metadata@1.0.0-beta.1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-polyfills@1.0.0-beta.1.1.4": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.1.2.1": {
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-router@1.0.0-beta.1.2.3": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.2.1",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-syntax-highlighter@0.0.4": {
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.5",
      "prismjs": "npm:prismjs@1.5.0"
    },
    "npm:aurelia-task-queue@1.0.0-beta.1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-templating-binding@1.0.0-beta.1.2.4": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.6",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.7"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.6": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.6",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.7"
    },
    "npm:aurelia-templating-router@1.0.0-beta.1.2.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.3",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.7"
    },
    "npm:aurelia-templating@1.0.0-beta.1.2.7": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.6",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.1"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer-shims@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:contra@1.9.4": {
      "atoa": "npm:atoa@1.0.0",
      "ticky": "npm:ticky@1.0.1"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:crossvent@1.5.4": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "custom-event": "npm:custom-event@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:dragula@3.7.1": {
      "contra": "npm:contra@1.9.4",
      "crossvent": "npm:crossvent@1.5.4"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:ticky@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  },
  bundles: {
    "vendor-753c08a8e7.js": [
      "github:HubSpot/tether@1.3.2.js",
      "github:HubSpot/tether@1.3.2/js/tether.js",
      "github:components/jquery@2.2.1.js",
      "github:components/jquery@2.2.1/jquery.js",
      "github:twbs/bootstrap@4.0.0-alpha.2.js",
      "github:twbs/bootstrap@4.0.0-alpha.2/js/bootstrap.js",
      "npm:atoa@1.0.0.js",
      "npm:atoa@1.0.0/atoa.js",
      "npm:contra@1.9.4/debounce.js",
      "npm:contra@1.9.4/emitter.js",
      "npm:crossvent@1.5.4.js",
      "npm:crossvent@1.5.4/src/crossvent.js",
      "npm:crossvent@1.5.4/src/eventmap.js",
      "npm:custom-event@1.0.0.js",
      "npm:custom-event@1.0.0/index.js",
      "npm:dragula@3.7.1.js",
      "npm:dragula@3.7.1/classes.js",
      "npm:dragula@3.7.1/dragula.js",
      "npm:jquery@2.2.4.js",
      "npm:jquery@2.2.4/dist/jquery.js",
      "npm:ticky@1.0.1.js",
      "npm:ticky@1.0.1/ticky-browser.js"
    ],
    "app-build-ab0e1cdc2f.js": [
      "drag-and-drop.js",
      "main.js",
      "model/base-tag.js",
      "model/device.html!github:systemjs/plugin-text@0.0.4.js",
      "model/device.js",
      "model/discover.js",
      "model/document.js",
      "model/monitor-override.html!github:systemjs/plugin-text@0.0.4.js",
      "model/monitor-override.js",
      "model/monitor.html!github:systemjs/plugin-text@0.0.4.js",
      "model/monitor.js",
      "model/properties.html!github:systemjs/plugin-text@0.0.4.js",
      "model/properties.js",
      "model/property.html!github:systemjs/plugin-text@0.0.4.js",
      "model/property.js",
      "model/user.html!github:systemjs/plugin-text@0.0.4.js",
      "model/user.js",
      "util/util.js",
      "view-model/document-element.js",
      "view-model/document-tools-element.js",
      "view-model/editor.js",
      "view-model/tag-element.js",
      "view-model/tagbar-element.js",
      "view-model/xml-dialog.js",
      "view/document-element.html!github:systemjs/plugin-text@0.0.4.js",
      "view/document-tools-element.html!github:systemjs/plugin-text@0.0.4.js",
      "view/editor.html!github:systemjs/plugin-text@0.0.4.js",
      "view/tag-element.html!github:systemjs/plugin-text@0.0.4.js",
      "view/tagbar-element.html!github:systemjs/plugin-text@0.0.4.js",
      "view/tagbar-tag.html!github:systemjs/plugin-text@0.0.4.js",
      "view/xml-dialog.html!github:systemjs/plugin-text@0.0.4.js"
    ],
    "aurelia-c72efffd92.js": [
      "npm:aurelia-binding@1.0.0-beta.1.3.6.js",
      "npm:aurelia-binding@1.0.0-beta.1.3.6/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.2.1.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.2.1/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3/aurelia-dependency-injection.js",
      "npm:aurelia-dialog@0.6.1.js",
      "npm:aurelia-dialog@0.6.1/aurelia-dialog.js",
      "npm:aurelia-dialog@0.6.1/dialog-configuration.js",
      "npm:aurelia-dialog@0.6.1/dialog-controller.js",
      "npm:aurelia-dialog@0.6.1/dialog-options.js",
      "npm:aurelia-dialog@0.6.1/dialog-service.js",
      "npm:aurelia-dialog@0.6.1/dialog.css!github:systemjs/plugin-text@0.0.4.js",
      "npm:aurelia-dialog@0.6.1/examples/prompt.html!github:systemjs/plugin-text@0.0.4.js",
      "npm:aurelia-dialog@0.6.1/lifecycle.js",
      "npm:aurelia-dialog@0.6.1/renderers/dialog-renderer.js",
      "npm:aurelia-dialog@0.6.1/renderers/renderer.js",
      "npm:aurelia-dialog@0.6.1/resources/ai-dialog-body.html!github:systemjs/plugin-text@0.0.4.js",
      "npm:aurelia-dialog@0.6.1/resources/ai-dialog-body.js",
      "npm:aurelia-dialog@0.6.1/resources/ai-dialog-footer.html!github:systemjs/plugin-text@0.0.4.js",
      "npm:aurelia-dialog@0.6.1/resources/ai-dialog-footer.js",
      "npm:aurelia-dialog@0.6.1/resources/ai-dialog-header.html!github:systemjs/plugin-text@0.0.4.js",
      "npm:aurelia-dialog@0.6.1/resources/ai-dialog-header.js",
      "npm:aurelia-dialog@0.6.1/resources/ai-dialog.html!github:systemjs/plugin-text@0.0.4.js",
      "npm:aurelia-dialog@0.6.1/resources/ai-dialog.js",
      "npm:aurelia-dialog@0.6.1/resources/attach-focus.js",
      "npm:aurelia-framework@1.0.0-beta.1.2.5.js",
      "npm:aurelia-framework@1.0.0-beta.1.2.5/aurelia-framework.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.2.2.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.2.2/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0-beta.1.2.0.js",
      "npm:aurelia-loader@1.0.0-beta.1.2.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0-beta.1.2.1.js",
      "npm:aurelia-logging-console@1.0.0-beta.1.2.1/aurelia-logging-console.js",
      "npm:aurelia-logging@1.0.0-beta.1.2.1.js",
      "npm:aurelia-logging@1.0.0-beta.1.2.1/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.0-beta.1.2.1.js",
      "npm:aurelia-metadata@1.0.0-beta.1.2.1/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.0.0-beta.1.2.1.js",
      "npm:aurelia-pal-browser@1.0.0-beta.1.2.1/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.0.0-beta.1.2.2.js",
      "npm:aurelia-pal@1.0.0-beta.1.2.2/aurelia-pal.js",
      "npm:aurelia-path@1.0.0-beta.1.2.2.js",
      "npm:aurelia-path@1.0.0-beta.1.2.2/aurelia-path.js",
      "npm:aurelia-polyfills@1.0.0-beta.1.1.4.js",
      "npm:aurelia-polyfills@1.0.0-beta.1.1.4/aurelia-polyfills.js",
      "npm:aurelia-syntax-highlighter@0.0.4.js",
      "npm:aurelia-syntax-highlighter@0.0.4/index.js",
      "npm:aurelia-syntax-highlighter@0.0.4/syntax-highlighter.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.2.1.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.2.1/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.2.4.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.2.4/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/binding-signaler.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/compile-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/compose.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/css-resource.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/dynamic-element.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/focus.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/hide.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/if.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/repeat.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/replaceable.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/sanitize-html.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/show.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/view-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.6/with.js",
      "npm:aurelia-templating@1.0.0-beta.1.2.7.js",
      "npm:aurelia-templating@1.0.0-beta.1.2.7/aurelia-templating.js",
      "npm:prismjs@1.5.0.js",
      "npm:prismjs@1.5.0/prism.js"
    ]
  },
  depCache: {
    "npm:dragula@3.7.1.js": [
      "npm:dragula@3.7.1/dragula.js"
    ],
    "npm:dragula@3.7.1/dragula.js": [
      "contra/emitter",
      "crossvent",
      "./classes"
    ],
    "npm:crossvent@1.5.4.js": [
      "npm:crossvent@1.5.4/src/crossvent.js"
    ],
    "npm:contra@1.9.4/emitter.js": [
      "atoa",
      "./debounce"
    ],
    "npm:atoa@1.0.0.js": [
      "npm:atoa@1.0.0/atoa.js"
    ],
    "npm:crossvent@1.5.4/src/crossvent.js": [
      "custom-event",
      "./eventmap"
    ],
    "npm:contra@1.9.4/debounce.js": [
      "ticky"
    ],
    "npm:custom-event@1.0.0.js": [
      "npm:custom-event@1.0.0/index.js"
    ],
    "npm:ticky@1.0.1.js": [
      "npm:ticky@1.0.1/ticky-browser.js"
    ],
    "github:twbs/bootstrap@4.0.0-alpha.2.js": [
      "github:twbs/bootstrap@4.0.0-alpha.2/js/bootstrap"
    ],
    "github:twbs/bootstrap@4.0.0-alpha.2/js/bootstrap.js": [
      "jquery",
      "tether"
    ],
    "npm:jquery@2.2.4.js": [
      "npm:jquery@2.2.4/dist/jquery.js"
    ],
    "github:HubSpot/tether@1.3.2.js": [
      "github:HubSpot/tether@1.3.2/js/tether"
    ],
    "github:components/jquery@2.2.1.js": [
      "github:components/jquery@2.2.1/jquery"
    ]
  }
});