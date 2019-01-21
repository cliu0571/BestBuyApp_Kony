define("ProductDetailPage", function() {
    return function(controller) {
        function addWidgetsProductDetailPage() {
            this.setDefaultUnit(kony.flex.DP);
            var CompHeader = new BestBuyComponents.CompHeader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "9.50%",
                "id": "CompHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%"
            }, {}, {});
            CompHeader.onClickBack = controller.AS_UWI_e38352f1d37b4ed3a8d1cb0dae05681a;
            var FlexProductDetail = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40%",
                "id": "FlexProductDetail",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexProductDetail.setDefaultUnit(kony.flex.DP);
            var FlexDivider = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "1%",
                "id": "FlexDivider",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "CopyslFbox0a8775d440ecf41",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexDivider.setDefaultUnit(kony.flex.DP);
            FlexDivider.add();
            var ImageProduct = new kony.ui.Image2({
                "height": "50%",
                "id": "ImageProduct",
                "imageWhenFailed": "kony_88.png",
                "imageWhileDownloading": "kony_88.png",
                "isVisible": true,
                "left": "3%",
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "3%",
                "width": "40%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var LabelProductDesc = new kony.ui.Label({
                "height": "30%",
                "id": "LabelProductDesc",
                "isVisible": true,
                "left": "3%",
                "skin": "CopydefLabel0b96ff44cc1c54e",
                "text": "Description",
                "textStyle": {},
                "top": "65%",
                "width": "94%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var LabelMore = new kony.ui.Label({
                "height": "10%",
                "id": "LabelMore",
                "isVisible": true,
                "left": "15%",
                "skin": "CopydefLabel0e1fe30de4dbe41",
                "text": "More...",
                "textStyle": {},
                "top": "54%",
                "width": "20%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var LabelProductName = new kony.ui.Label({
                "height": "20%",
                "id": "LabelProductName",
                "isVisible": true,
                "left": "45%",
                "skin": "CopydefLabel0d18b8694febf4c",
                "text": "Name",
                "textStyle": {},
                "top": "3%",
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
                "left": "45%",
                "skin": "CopydefLabel0d18b8694febf4c",
                "text": "Price",
                "textStyle": {},
                "top": "25%",
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
                "height": "10%",
                "id": "LabelAveReview",
                "isVisible": true,
                "left": "45%",
                "skin": "CopydefLabel0d18b8694febf4c",
                "text": "Ave review",
                "textStyle": {},
                "top": "40%",
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
            var ImageRatingStars = new kony.ui.Image2({
                "height": "10%",
                "id": "ImageRatingStars",
                "imageWhenFailed": "ratings_star_1.png",
                "imageWhileDownloading": "ratings_star_1.png",
                "isVisible": true,
                "left": "45%",
                "skin": "slImage",
                "src": "ratings_star_5.png",
                "top": "52%",
                "width": "35%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexProductDetail.add(FlexDivider, ImageProduct, LabelProductDesc, LabelMore, LabelProductName, LabelPrice, LabelAveReview, ImageRatingStars);
            var FlexReview = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50%",
                "id": "FlexReview",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "50%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexReview.setDefaultUnit(kony.flex.DP);
            var LabelNumOfReviews = new kony.ui.Label({
                "height": "10%",
                "id": "LabelNumOfReviews",
                "isVisible": true,
                "left": "3%",
                "skin": "CopydefLabel0ce604cfe917749",
                "text": "Number of reviews",
                "textStyle": {},
                "top": "3%",
                "width": "94%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var FlexSegmentReview = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "82%",
                "id": "FlexSegmentReview",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "15%",
                "width": "94%",
                "zIndex": 1
            }, {}, {});
            FlexSegmentReview.setDefaultUnit(kony.flex.DP);
            var SegmentReviews = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "ImageRatingStars": "",
                    "LabelComment": "",
                    "LabelSubmittedBy": "",
                    "LabelTitle": ""
                }],
                "groupCells": false,
                "height": "100%",
                "id": "SegmentReviews",
                "isVisible": true,
                "left": "0%",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "FlexRowReview",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "FlexRowReview": "FlexRowReview",
                    "ImageRatingStars": "ImageRatingStars",
                    "LabelComment": "LabelComment",
                    "LabelSubmittedBy": "LabelSubmittedBy",
                    "LabelTitle": "LabelTitle"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexSegmentReview.add(SegmentReviews);
            FlexReview.add(LabelNumOfReviews, FlexSegmentReview);
            this.add(CompHeader, FlexProductDetail, FlexReview);
        };
        return [{
            "addWidgets": addWidgetsProductDetailPage,
            "enabledForIdleTimeout": false,
            "id": "ProductDetailPage",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "CopyslForm0g802e1fba1ce4f"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "onDeviceBack": controller.AS_Form_ea90e924b5a9407f9cf6e5eebd031511,
            "retainScrollPosition": false
        }]
    }
});