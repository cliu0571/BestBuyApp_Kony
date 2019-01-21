define("HomePage", function() {
    return function(controller) {
        function addWidgetsHomePage() {
            this.setDefaultUnit(kony.flex.DP);
            var FlexMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlexMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexMain.setDefaultUnit(kony.flex.DP);
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
            CompHeader.onClickBack = controller.AS_UWI_f30acd4fc6054bb081454494d2591513;
            CompHeader.onClickSearch = controller.AS_UWI_gd43d72befb84daf9b1e3dd40ca1daf7;
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
            var LabelHomePath = new kony.ui.Label({
                "height": "10%",
                "id": "LabelHomePath",
                "isVisible": true,
                "left": "3%",
                "skin": "CopydefLabel0f0f036cbfd004b",
                "text": "Home",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1%",
                "width": "94%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var FlexSegmentCategories = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "85%",
                "id": "FlexSegmentCategories",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "12%",
                "width": "94%",
                "zIndex": 1
            }, {}, {});
            FlexSegmentCategories.setDefaultUnit(kony.flex.DP);
            var SegmentCategories = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "LabelRowCategory": ""
                }],
                "groupCells": false,
                "height": "100%",
                "id": "SegmentCategories",
                "isVisible": true,
                "left": "0%",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_e6dcc33605844182ba62b9a8d6a1f865,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "Copyseg0aee6319ce2b547",
                "rowTemplate": "FlexRowCategory",
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
                    "FlexRowCategory": "FlexRowCategory",
                    "LabelRowCategory": "LabelRowCategory"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexSegmentCategories.add(SegmentCategories);
            FlexMainContent.add(LabelHomePath, FlexSegmentCategories);
            var FlexSearchBar = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10%",
                "id": "FlexSearchBar",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "-20%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexSearchBar.setDefaultUnit(kony.flex.DP);
            var ButtonCancel = new kony.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "94%",
                "id": "ButtonCancel",
                "isVisible": true,
                "left": "65%",
                "onClick": controller.AS_Button_fd274c81a6ef4c45ac473a0570e6c51c,
                "skin": "CopydefBtnNormal0e2d95b62c3e741",
                "text": "Cancel",
                "top": "3%",
                "width": "33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var TextSearchKey = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextBoxFocus",
                "height": "94%",
                "id": "TextSearchKey",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "3%",
                "onDone": controller.AS_TextField_da61863493ef4fc19b673a548316ccf8,
                "secureTextEntry": false,
                "skin": "defTextBoxNormal",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "3%",
                "width": "60%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            FlexSearchBar.add(ButtonCancel, TextSearchKey);
            FlexMain.add(CompHeader, FlexMainContent, FlexSearchBar);
            this.add(FlexMain);
        };
        return [{
            "addWidgets": addWidgetsHomePage,
            "enabledForIdleTimeout": false,
            "id": "HomePage",
            "init": controller.AS_Form_g662fffaed7044f3946cbf9398bb4664,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_i3e508db23554c2b9d339209b510976a,
            "skin": "CopyslForm0h143417a0ff040"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "onDeviceBack": controller.AS_Form_ede91c95975f4a6ab5c130046462c9c5,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});