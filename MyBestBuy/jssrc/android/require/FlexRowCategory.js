define("FlexRowCategory", function() {
    return function(controller) {
        var FlexRowCategory = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10%",
            "id": "FlexRowCategory",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        FlexRowCategory.setDefaultUnit(kony.flex.DP);
        var LabelRowCategory = new kony.ui.Label({
            "centerY": "50%",
            "height": "94%",
            "id": "LabelRowCategory",
            "isVisible": true,
            "left": "3%",
            "skin": "CopydefLabel0b39e690d89b94d",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        FlexRowCategory.add(LabelRowCategory);
        return FlexRowCategory;
    }
})