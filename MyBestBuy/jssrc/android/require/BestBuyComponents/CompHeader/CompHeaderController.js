define("BestBuyComponents/CompHeader/userCompHeaderController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {}
    };
});
define("BestBuyComponents/CompHeader/CompHeaderControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("BestBuyComponents/CompHeader/CompHeaderController", ["BestBuyComponents/CompHeader/userCompHeaderController", "BestBuyComponents/CompHeader/CompHeaderControllerActions"], function() {
    var controller = require("BestBuyComponents/CompHeader/userCompHeaderController");
    var actions = require("BestBuyComponents/CompHeader/CompHeaderControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "isVisibleBack", function(val) {
            this.view.FlexBack.isVisible = val;
        });
        defineGetter(this, "isVisibleBack", function() {
            return this.view.FlexBack.isVisible;
        });
        defineSetter(this, "isVisibleSearch", function(val) {
            this.view.FlexSearch.isVisible = val;
        });
        defineGetter(this, "isVisibleSearch", function() {
            return this.view.FlexSearch.isVisible;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.AS_onClickBack_i69041d62a0b4200b194ea3bc73d6f4c = function() {
        if (this.onClickBack) {
            this.onClickBack.apply(this, arguments);
        }
    }
    controller.AS_onClickSearch_c6bcc2a90dc0431cb17497cf9bb846e6 = function() {
        if (this.onClickSearch) {
            this.onClickSearch.apply(this, arguments);
        }
    }
    return controller;
});
