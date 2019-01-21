define(function() {
    return function(controller) {
        var CompHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "9.50%",
            "id": "CompHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "100%"
        }, {}, {});
        CompHeader.setDefaultUnit(kony.flex.DP);
        var FlexBack = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "95%",
            "id": "FlexBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5%",
            "isModalContainer": false,
            "onClick": controller.AS_onClickBack_i69041d62a0b4200b194ea3bc73d6f4c,
            "skin": "slFbox",
            "top": 20,
            "width": "20%",
            "zIndex": 1
        }, {}, {});
        FlexBack.setDefaultUnit(kony.flex.DP);
        var ImageBack = new kony.ui.Image2({
            "height": "100%",
            "id": "ImageBack",
            "isVisible": true,
            "left": "0%",
            "skin": "slImage",
            "src": "ic_menu_back.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        FlexBack.add(ImageBack);
        var FlexLogo = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "92%",
            "id": "FlexLogo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "30%",
            "zIndex": 1
        }, {}, {});
        FlexLogo.setDefaultUnit(kony.flex.DP);
        var ImageLogo = new kony.ui.Image2({
            "height": "100%",
            "id": "ImageLogo",
            "isVisible": true,
            "left": "0%",
            "skin": "slImage",
            "src": "bestbuy.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        FlexLogo.add(ImageLogo);
        var FlexSearch = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "95%",
            "id": "FlexSearch",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "onClick": controller.AS_onClickSearch_c6bcc2a90dc0431cb17497cf9bb846e6,
            "right": "5%",
            "skin": "slFbox",
            "width": "20%",
            "zIndex": 1
        }, {}, {});
        FlexSearch.setDefaultUnit(kony.flex.DP);
        var ImageSearch = new kony.ui.Image2({
            "height": "100%",
            "id": "ImageSearch",
            "isVisible": true,
            "left": "0%",
            "skin": "slImage",
            "src": "search.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        FlexSearch.add(ImageSearch);
        var FlexDivider = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "height": "1.50%",
            "id": "FlexDivider",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopyslFbox0b86f3117091b42",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        FlexDivider.setDefaultUnit(kony.flex.DP);
        FlexDivider.add();
        CompHeader.add(FlexBack, FlexLogo, FlexSearch, FlexDivider);
        return CompHeader;
    }
})