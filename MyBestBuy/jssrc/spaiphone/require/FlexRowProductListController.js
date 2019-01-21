define("userFlexRowProductListController", {
    //Type your controller code here 
});
define("FlexRowProductListControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("FlexRowProductListController", ["userFlexRowProductListController", "FlexRowProductListControllerActions"], function() {
    var controller = require("userFlexRowProductListController");
    var controllerActions = ["FlexRowProductListControllerActions"];
    for (var i = 0; i < controllerActions.length; i++) {
        var actions = require(controllerActions[i]);
        for (var key in actions) {
            controller[key] = actions[key];
        }
    }
    return controller;
});
