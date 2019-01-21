define("FlexRowProductList", function() {
    return function(controller) {
        var FlexRowProductList = new kony.ui.FlexContainer({
            "clipBounds": true,
            "height": "220dp",
            "id": "FlexRowProductList",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0e39d8860b9d047",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        FlexRowProductList.setDefaultUnit(kony.flex.DP);
        var FlexOnSale = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10%",
            "id": "FlexOnSale",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopyslFbox0c8f41e9ba47a43",
            "top": "0%",
            "width": "100%",
            "zIndex": 10
        }, {}, {});
        FlexOnSale.setDefaultUnit(kony.flex.DP);
        var LabelOnSale = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "LabelOnSale",
            "isVisible": true,
            "skin": "CopydefLabel0b6324ef2c1da48",
            "text": "!!! On Sale !!!",
            "textStyle": {},
            "width": "30%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        FlexOnSale.add(LabelOnSale);
        var LabelProductName = new kony.ui.Label({
            "height": "20%",
            "id": "LabelProductName",
            "isVisible": true,
            "left": "47%",
            "skin": "CopydefLabel0g7ea8bae45e540",
            "text": "ProductName",
            "textStyle": {},
            "top": "20%",
            "width": "50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var LabelPrice = new kony.ui.Label({
            "height": "10%",
            "id": "LabelPrice",
            "isVisible": true,
            "left": "47%",
            "skin": "CopyDef",
            "text": "Price",
            "textStyle": {},
            "top": "47%",
            "width": "50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var LabelAveReview = new kony.ui.Label({
            "height": "20%",
            "id": "LabelAveReview",
            "isVisible": true,
            "left": "47%",
            "skin": "CopydefLabel0g7ea8bae45e540",
            "text": "Ave Review",
            "textStyle": {},
            "top": "59%",
            "width": "50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var ImageProduct = new kony.ui.Image2({
            "height": "84%",
            "id": "ImageProduct",
            "imageWhenFailed": "kony_88.png",
            "imageWhileDownloading": "kony_88.png",
            "isVisible": true,
            "left": "3%",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "13%",
            "width": "40%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        FlexRowProductList.add(FlexOnSale, LabelProductName, LabelPrice, LabelAveReview, ImageProduct);
        return FlexRowProductList;
    }
})