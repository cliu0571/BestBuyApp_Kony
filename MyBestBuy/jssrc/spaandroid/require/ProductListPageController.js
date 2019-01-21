define("userProductListPageController", {
    //Type your controller code here 
    MyProductListConfig: {
        integrationServicesName: "",
        operationsArray: [],
        apiKey: "",
        selectedRow: {},
        bByCategory: false,
        searchKey: "",
        productId: "",
    },
    onNavigate: function(myConfig) {
        if (myConfig && (myConfig !== null || myConfig === "")) {
            this.MyProductListConfig.integrationServicesName = myConfig.integrationServicesName;
            this.MyProductListConfig.operationsArray = myConfig.operationsArray;
            this.MyProductListConfig.apiKey = myConfig.apiKey;
            this.MyProductListConfig.selectedRow = myConfig.selectedRow;
            this.MyProductListConfig.bByCategory = myConfig.bByCategory;
            this.MyProductListConfig.searchKey = myConfig.searchKey;
            this.view.CompHeader.isVisibleSearch = false;
            this.setLabelProductPath();
            // Go get products by different APIs
            if (this.MyProductListConfig.bByCategory) {
                this.ProductListPage_GetProducts_ByCategory();
            } else {
                this.ProductListPage_GetProducts_BySearch();
            }
        }
    },
    setLabelProductPath: function() {
        if (this.MyProductListConfig.bByCategory) {
            this.view.LabelProductPath.text = "Category: " + this.MyProductListConfig.selectedRow.categoryName;
        } else {
            this.view.LabelProductPath.text = "Results: " + this.MyProductListConfig.searchKey;
        }
    },
    ProductListPage_GetProducts_ByCategory: function() {
        this.MyProductListConfig.bByCategory = true;
        kony.model.ApplicationContext.showLoadingScreen("Loading Products By Category...");
        if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
            var integrationObj = kony.sdk.getCurrentInstance().getIntegrationService(this.MyProductListConfig.integrationServicesName);
            var operationName = this.MyProductListConfig.operationsArray[2]; //"GetProductsByCategory"
            var headers = {};
            var data = {
                categoryid: this.MyProductListConfig.selectedRow.categoryId,
                apiKey: this.MyProductListConfig.apiKey
            };
            integrationObj.invokeOperation(operationName, headers, data, this.getProductsSuccessCallback, this.getProductsErrorCallback);
            kony.application.dismissLoadingScreen();
        } else {
            alert("Network N/A !");
            kony.application.dismissLoadingScreen();
        }
    },
    ProductListPage_GetProducts_BySearch: function() {
        this.MyProductListConfig.bByCategory = false;
        kony.model.ApplicationContext.showLoadingScreen("Loading Products By Search...");
        if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
            var integrationObj = kony.sdk.getCurrentInstance().getIntegrationService(this.MyProductListConfig.integrationServicesName);
            var operationName = this.MyProductListConfig.operationsArray[3]; //"GetProductsBySearch"
            var headers = {};
            var data = {
                searchKey: this.MyProductListConfig.searchKey,
                apiKey: this.MyProductListConfig.apiKey
            };
            integrationObj.invokeOperation(operationName, headers, data, this.getProductsSuccessCallback, this.getProductsErrorCallback);
            kony.application.dismissLoadingScreen();
        } else {
            alert("Network N/A !");
            kony.application.dismissLoadingScreen();
        }
    },
    getProductsSuccessCallback: function(response) {
        if (!(response === null || response === "") && response.opstatus === 0) {
            if (!response.productList) {
                alert("No products !!");
                kony.application.dismissLoadingScreen();
                this.ProductList_Back_OnClick();
            } else if (response.productList.length === 0) {
                alert("Cannot find Any product for this category !!");
                kony.application.dismissLoadingScreen();
                this.ProductList_Back_OnClick();
            } else {
                var prodList = [];
                for (var j = 0; j < response.productList.length; j++) {
                    var bOnSale = response.productList[j].onSale;
                    var bIsRatingExist = !(response.productList[j].customReviewAverage === null || response.productList[j].customReviewAverage === "");
                    var prodObj = {
                        LabelProductName: response.productList[j].name,
                        LabelPrice: {
                            text: bOnSale ? "Sale Price: $ " + response.productList[j].salePrice : "$ " + response.productList[j].regularPrice,
                            skin: bOnSale ? "CopyDefRed" : "CopyDef"
                        },
                        LabelAveReview: {
                            isVisible: bIsRatingExist,
                            text: "Avg Rating: " + response.productList[j].customReviewAverage
                        },
                        ImageProduct: response.productList[j].thumbnailImage,
                        productId: response.productList[j].productId,
                        FlexOnSale: {
                            isVisible: bOnSale
                        }
                    };
                    prodList.push(prodObj);
                }
                this.view.SegmentProductList.setData(prodList);
                kony.application.dismissLoadingScreen();
            }
        } else {
            alert("Products Integration services failed !");
            kony.application.dismissLoadingScreen();
            this.ProductList_Back_OnClick();
        }
    },
    getProductsErrorCallback: function() {
        alert("Get ProductsData Integration services failed !!");
        kony.application.dismissLoadingScreen();
    },
    ProductList_Animation: function() {
        var animConfig = {
            "duration": 0.8,
            "iterationCount": 1,
            "delay": 0,
            "fillMode": kony.anim.FORWARDS
        };
        var transformProp1 = kony.ui.makeAffineTransform();
        transformProp1.scale(0.0, 0.0);
        //   var transformProp2 = kony.ui.makeAffineTransform();
        //   transformProp2.scale(0.5,0.5);
        var transformProp3 = kony.ui.makeAffineTransform();
        transformProp3.scale(1, 1);
        var animDefinition = {
            0: {
                "anchorPoint": {
                    "x": 0.5,
                    "y": 0.5
                },
                "transform": transformProp1
            },
            //50 : {"anchorPoint":{"x":0.5,"y":0.5},"transform":transformProp2},
            100: {
                "anchorPoint": {
                    "x": 0.5,
                    "y": 0.5
                },
                "transform": transformProp3
            }
        };
        this.view.SegmentProductList.setAnimations({
            visible: {
                definition: kony.ui.createAnimation(animDefinition),
                config: animConfig
            }
        });
    },
    ProductList_Back_OnClick: function() {
        var ntf = new kony.mvc.Navigation("HomePage");
        ntf.navigate(this.MyProductListConfig);
    },
    ProductList_Row_OnClick: function() {
        this.MyProductListConfig.productId = this.view.SegmentProductList.selectedRowItems[0].productId;
        this.ProductList__Navi_ProductDetails(this.MyProductListConfig);
    },
    ProductList__Navi_ProductDetails: function() {
        var ntf = new kony.mvc.Navigation("ProductDetailPage");
        ntf.navigate(this.MyProductListConfig);
    },
});
define("ProductListPageControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClickBack defined for CompHeader **/
    AS_UWI_a74bd9af2fbd4275b942fc4e8a5f1e81: function AS_UWI_a74bd9af2fbd4275b942fc4e8a5f1e81(eventobject) {
        var self = this;
        return self.ProductList_Back_OnClick.call(this);
    },
    /** onRowClick defined for SegmentProductList **/
    AS_Segment_hd576eb59f5647769b029bab47709c11: function AS_Segment_hd576eb59f5647769b029bab47709c11(eventobject, sectionNumber, rowNumber) {
        var self = this;
        return self.ProductList_Row_OnClick.call(this);
    },
    /** postShow defined for ProductListPage **/
    AS_Form_d2fd5625c0d44ab096a09761ebf9e674: function AS_Form_d2fd5625c0d44ab096a09761ebf9e674(eventobject) {
        var self = this;
        return self.ProductList_Animation.call(this);
    },
    /** onDeviceBack defined for ProductListPage **/
    AS_Form_de2a1de93e62436aa94e0729488d4316: function AS_Form_de2a1de93e62436aa94e0729488d4316(eventobject) {
        var self = this;
        return self.ProductList_Back_OnClick.call(this);
    },
    /** onDeviceBack defined for ProductListPage **/
    AS_Form_e6135ade3732443896e7a2be7544b231: function AS_Form_e6135ade3732443896e7a2be7544b231(eventobject) {
        var self = this;
        return self.ProductList_Back_OnClick.call(this);
    }
});
define("ProductListPageController", ["userProductListPageController", "ProductListPageControllerActions"], function() {
    var controller = require("userProductListPageController");
    var controllerActions = ["ProductListPageControllerActions"];
    for (var i = 0; i < controllerActions.length; i++) {
        var actions = require(controllerActions[i]);
        for (var key in actions) {
            controller[key] = actions[key];
        }
    }
    return controller;
});
