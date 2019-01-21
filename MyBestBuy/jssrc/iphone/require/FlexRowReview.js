define("FlexRowReview", function() {
    return function(controller) {
        var FlexRowReview = new kony.ui.FlexContainer({
            "clipBounds": true,
            "height": "220dp",
            "id": "FlexRowReview",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        FlexRowReview.setDefaultUnit(kony.flex.DP);
        var LabelTitle = new kony.ui.Label({
            "height": "25%",
            "id": "LabelTitle",
            "isVisible": true,
            "left": "3%",
            "skin": "CopydefLabel0b1574612793c4b",
            "text": "Title",
            "textStyle": {},
            "top": "3%",
            "width": "94%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var LabelSubmittedBy = new kony.ui.Label({
            "height": "10%",
            "id": "LabelSubmittedBy",
            "isVisible": true,
            "left": "3%",
            "skin": "CopydefLabel0b1574612793c4b",
            "text": "Submitted By",
            "textStyle": {},
            "top": "30%",
            "width": "94%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var LabelComment = new kony.ui.Label({
            "height": "40%",
            "id": "LabelComment",
            "isVisible": true,
            "left": "3%",
            "skin": "CopydefLabel0d5aa014569ec4e",
            "text": "Comment",
            "textStyle": {},
            "top": "55%",
            "width": "94%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var ImageRatingStars = new kony.ui.Image2({
            "height": "10%",
            "id": "ImageRatingStars",
            "imageWhenFailed": "ratings_star_1.png",
            "imageWhileDownloading": "ratings_star_1.png",
            "isVisible": true,
            "left": "3%",
            "skin": "slImage",
            "src": "ratings_star_5.png",
            "top": "43%",
            "width": "30%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        FlexRowReview.add(LabelTitle, LabelSubmittedBy, LabelComment, ImageRatingStars);
        return FlexRowReview;
    }
})