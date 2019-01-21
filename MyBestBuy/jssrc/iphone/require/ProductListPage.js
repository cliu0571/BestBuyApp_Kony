define("ProductListPage", function() {
    return function(controller) {
        function addWidgetsProductListPage() {
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
            CompHeader.onClickBack = controller.AS_UWI_a74bd9af2fbd4275b942fc4e8a5f1e81;
            var FlexMainContent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "90%",
                "id": "FlexMainContent",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexMainContent.setDefaultUnit(kony.flex.DP);
            var LabelProductPath = new kony.ui.Label({
                "height": "10%",
                "id": "LabelProductPath",
                "isVisible": true,
                "left": "3%",
                "skin": "CopydefLabel0g41e282dfbbf49",
                "text": "Category for:",
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
            var FlexSegmentProductList = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80%",
                "id": "FlexSegmentProductList",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3%",
                "isModalContainer": false,
                "skin": "CopyslFbox0i86f999eab6340",
                "top": "15%",
                "width": "94%",
                "zIndex": 1
            }, {}, {});
            FlexSegmentProductList.setDefaultUnit(kony.flex.DP);
            var SegmentProductList = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "ImageProduct": "",
                    "LabelAveReview": "",
                    "LabelOnSale": "",
                    "LabelPrice": "",
                    "LabelProductName": ""
                }],
                "groupCells": false,
                "height": "100%",
                "id": "SegmentProductList",
                "isVisible": true,
                "left": "0%",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_hd576eb59f5647769b029bab47709c11,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "Copyseg0be616421df864d",
                "rowTemplate": "FlexRowProductList",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "0%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "FlexOnSale": "FlexOnSale",
                    "FlexRowProductList": "FlexRowProductList",
                    "ImageProduct": "ImageProduct",
                    "LabelAveReview": "LabelAveReview",
                    "LabelOnSale": "LabelOnSale",
                    "LabelPrice": "LabelPrice",
                    "LabelProductName": "LabelProductName"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_ROW_SELECT,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            FlexSegmentProductList.add(SegmentProductList);
            FlexMainContent.add(LabelProductPath, FlexSegmentProductList);
            this.add(CompHeader, FlexMainContent);
        };
        return [{
            "addWidgets": addWidgetsProductListPage,
            "enabledForIdleTimeout": false,
            "id": "ProductListPage",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_d2fd5625c0d44ab096a09761ebf9e674,
            "skin": "CopyslForm0jbc5eb956adb45"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": false,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "titleBar": false,
            "titleBarSkin": "slTitleBar"
        }]
    }
});