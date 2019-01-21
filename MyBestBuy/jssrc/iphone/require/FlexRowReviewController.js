define("userFlexRowReviewController", {
    //Type your controller code here 
});
define("FlexRowReviewControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("FlexRowReviewController", ["userFlexRowReviewController", "FlexRowReviewControllerActions"], function() {
    var controller = require("userFlexRowReviewController");
    var controllerActions = ["FlexRowReviewControllerActions"];
    for (var i = 0; i < controllerActions.length; i++) {
        var actions = require(controllerActions[i]);
        for (var key in actions) {
            controller[key] = actions[key];
        }
    }
    return controller;
});
