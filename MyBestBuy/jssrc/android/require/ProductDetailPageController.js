define("userProductDetailPageController", {
    MyProductDetailConfig: {
        integrationServicesName: "",
        operationsArray: [],
        apiKey: "",
        productId: "",
        sku: "",
    },
    //Type your controller code here 
    onNavigate: function(myConfig) {
        this.MyProductDetailConfig.integrationServicesName = myConfig.integrationServicesName;
        this.MyProductDetailConfig.operationsArray = myConfig.operationsArray;
        this.MyProductDetailConfig.apiKey = myConfig.apiKey;
        this.MyProductDetailConfig.productId = myConfig.productId;
        this.ProductDetail_GetProductDetail();
        this.view.CompHeader.isVisibleSearch = false;
    },
    ProductDetail_GetProductDetail: function() {
        kony.model.ApplicationContext.showLoadingScreen("Loading Product detail...");
        if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
            var integrationObj = kony.sdk.getCurrentInstance().getIntegrationService(this.MyProductDetailConfig.integrationServicesName);
            var operationName = this.MyProductDetailConfig.operationsArray[1]; //"GetProductDetails"
            var headers = {};
            var data = {
                productid: this.MyProductDetailConfig.productId,
                apiKey: this.MyProductDetailConfig.apiKey
            };
            integrationObj.invokeOperation(operationName, headers, data, this.getProductsDetailSuccessCallback, this.getProductsDetailErrorCallback);
            kony.application.dismissLoadingScreen();
        } else {
            alert("Network N/A !");
            kony.application.dismissLoadingScreen();
        }
    },
    getProductsDetailSuccessCallback: function(response) {
        if (!(response === null || response === "") && response.opstatus === 0) {
            if (!response.productName) {
                alert("This product is N/A !");
                kony.application.dismissLoadingScreen();
                this.ProductDetail_Navi_ProductList();
            } else {
                this.view.ImageProduct.src = response.productImage;
                this.view.LabelProductName.text = response.productName;
                var bOnSale = response.onSale;
                var strPrice = bOnSale ? "On Sale! $ " + response.salePrice : "$ " + response.regularPrice;
                this.view.LabelPrice.text = strPrice;
                var rate = response.averageReview;
                if (rate === null || rate < 1) {
                    rate = 1;
                } else if (rate > 5) {
                    rate = 5;
                } else {
                    rate = Math.trunc(rate);
                }
                this.view.LabelAveReview.text = "Ave reviews: " + ((response.averageReview === null || response.averageReview === "") ? 0 : response.averageReview);
                this.view.ImageRatingStars.src = "ratings_star_" + rate + ".png";
                this.view.LabelProductDesc.text = response.productDesc;
                this.MyProductDetailConfig.sku = !response.sku ? "" : response.sku;
                kony.application.dismissLoadingScreen();
                this.ProductDetail_GetReview();
            }
        } else {
            alert("Get Products details failed !!");
            kony.application.dismissLoadingScreen();
            this.ProductDetail_Navi_ProductList();
        }
    },
    getProductsDetailErrorCallback: function() {
        alert("Get Product detail info fail !!");
        kony.application.dismissLoadingScreen();
        this.ProductDetail_Navi_ProductList();
    },
    ProductDetail_GetReview: function() {
        kony.model.ApplicationContext.showLoadingScreen("Loading Product Reviews...");
        if (!(this.MyProductDetailConfig.sku === "" || this.MyProductDetailConfig.sku === null)) {
            if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
                var integrationObj = kony.sdk.getCurrentInstance().getIntegrationService(this.MyProductDetailConfig.integrationServicesName);
                var operationName = this.MyProductDetailConfig.operationsArray[4]; //GetUserReviewsByProduct
                var headers = {};
                var data = {
                    skuid: this.MyProductDetailConfig.sku,
                    apiKey: this.MyProductDetailConfig.apiKey
                };
                integrationObj.invokeOperation(operationName, headers, data, this.getReviewsSuccessCallback, this.getReviewErrorCallback);
                kony.application.dismissLoadingScreen();
            } else {
                alert("Network N/A !");
                kony.application.dismissLoadingScreen();
            }
        } else {
            getReviewErrorCallback();
        }
    },
    getReviewsSuccessCallback: function(response) {
        if (!(response === null || response === "") && response.opstatus === 0) {
            if (!response.reviewList || response.reviewList.length === 0) {
                this.getReviewErrorCallback();
            } else {
                var reviewArray = [];
                for (var i = 0; i < response.reviewList.length; i++) {
                    var rate = response.reviewList[i].rating;
                    if (rate === null || rate < 1) {
                        rate = 1;
                    } else if (rate > 5) {
                        rate = 5;
                    } else {
                        rate = Math.trunc(rate);
                    }
                    var reviewObj = {
                        LabelTitle: response.reviewList[i].title,
                        LabelSubmittedBy: "SubmittedBy: " + response.reviewList[i].name,
                        LabelComment: response.reviewList[i].comment,
                        ImageRateingStars: "ratings_star_" + rate + ".png"
                    };
                    reviewArray.push(reviewObj);
                }
                this.view.FlexSegmentReview.isVisible = true;
                this.view.SegmentReviews.setData(reviewArray);
                this.view.LabelNumOfReviews.text = "Number of Reviews: " + reviewArray.length;
                kony.application.dismissLoadingScreen();
            }
        } else {
            this.getReviewErrorCallback();
        }
    },
    getReviewErrorCallback: function() {
        this.view.LabelNumOfReviews.text = "No Reviews !";
        this.view.FlexSegmentReview.isVisible = false;
        kony.application.dismissLoadingScreen();
    },
    ProductDetail_Navi_ProductList: function() {
        var ntf = new kony.mvc.Navigation("ProductListPage");
        ntf.navigate(null);
    },
});
define("ProductDetailPageControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClickBack defined for CompHeader **/
    AS_UWI_e38352f1d37b4ed3a8d1cb0dae05681a: function AS_UWI_e38352f1d37b4ed3a8d1cb0dae05681a(eventobject) {
        var self = this;
        return self.ProductDetail_Navi_ProductList.call(this);
    },
    /** onDeviceBack defined for ProductDetailPage **/
    AS_Form_ed688648b98e4e01a5722cdd9547d2c5: function AS_Form_ed688648b98e4e01a5722cdd9547d2c5(eventobject) {
        var self = this;
        return self.ProductDetail_Navi_ProductList.call(this);
    },
    /** onDeviceBack defined for ProductDetailPage **/
    AS_Form_ea90e924b5a9407f9cf6e5eebd031511: function AS_Form_ea90e924b5a9407f9cf6e5eebd031511(eventobject) {
        var self = this;
        return self.ProductDetail_Navi_ProductList.call(this);
    }
});
define("ProductDetailPageController", ["userProductDetailPageController", "ProductDetailPageControllerActions"], function() {
    var controller = require("userProductDetailPageController");
    var controllerActions = ["ProductDetailPageControllerActions"];
    for (var i = 0; i < controllerActions.length; i++) {
        var actions = require(controllerActions[i]);
        for (var key in actions) {
            controller[key] = actions[key];
        }
    }
    return controller;
});
