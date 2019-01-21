define("userFlexRowCategoryController", {
    //Type your controller code here 
});
define("FlexRowCategoryControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("FlexRowCategoryController", ["userFlexRowCategoryController", "FlexRowCategoryControllerActions"], function() {
    var controller = require("userFlexRowCategoryController");
    var controllerActions = ["FlexRowCategoryControllerActions"];
    for (var i = 0; i < controllerActions.length; i++) {
        var actions = require(controllerActions[i]);
        for (var key in actions) {
            controller[key] = actions[key];
        }
    }
    return controller;
});
