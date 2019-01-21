define({
    //Type your controller code here 

    MyConfig: {
        selectedCategoryId: "cat00000",
        apiKey: "w7bh9czfxvv8sd7a8qqysnbj",
        integrationServicesName: "BestBuyServices",
        operationsArray: ["GetCategories", "GetProductDetails", "GetProductsByCategory", "GetProductsBySearchKey", "GetUserReviewsByProduct"],

        //catArray: [], //current Categories data
        categoryObj: {}, // top element of current pathStack
        pathStack: [{
            categoryId: "cat00000",
            categoryName: "BestBuy"
        }],
        selectedRow: {},
        bByCategory: true,
        searchKey: "",
        //appKey: "e0de7595adcbbf2c29548f6c8a759d74",
        //appSecret: "4702efeace96ea96513686d0681e17f4",
        //serviceURL: "https://100025081.auth.konycloud.com/appconfig",		
    },

    // Set back arrow invisible
    HomePage_Init: function() {
        this.view.CompHeader.isVisibleBack = false;
    },

    // Get categories data from MobileFabric
    HomePage_GetCategoriesData: function() {
        kony.model.ApplicationContext.showLoadingScreen("Loading Categories...");
        if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
            var integrationObj = kony.sdk.getCurrentInstance().getIntegrationService(this.MyConfig.integrationServicesName);
            var operationName = this.MyConfig.operationsArray[0]; //"GetCategories"
            var headers = {};
            this.MyConfig.categoryObj = this.MyConfig.pathStack.pop();
            var data = {
                catid: this.MyConfig.categoryObj.categoryId,
                apiKey: this.MyConfig.apiKey
            };
            integrationObj.invokeOperation(operationName, headers, data, this.getCategoriesSuccessCallback, this.getCategoriesErrorCallback);
        } else {
            alert("Network N/A !");
            kony.application.dismissLoadingScreen();
        }
    },

    getCategoriesSuccessCallback: function(response) {
        //kony.model.ApplicationContext.showLoadingScreen("Filling Categories...");
        if ((response !== null || response !== "") && response.opstatus === 0 && response.categoriesList) {
            if (response.categoriesList.length > 0) {
                // stay at HomePage, no navigation
                // Seg setdata
                //alert("1 "+JSON.stringify(response.categoriesList));
                var catArray = [];
                for (var i = 0; i < response.categoriesList.length; i++) {
                    var catObj = {
                        LabelRowCategory: response.categoriesList[i].name,
                        categoryid: response.categoriesList[i].id
                    };
                    catArray.push(catObj);
                }
                //alert("1.5 "+JSON.stringify(catArray));
                this.view.SegmentCategories.setData(catArray);
                kony.application.dismissLoadingScreen();
                // push current ele back, push selected ele
                this.MyConfig.pathStack.push(this.MyConfig.categoryObj);
                this.setPathtoLabel();
            } else {
                // no push back, and if stack is null, push cat00000, look at backarrow isvisible when click
                if (this.MyConfig.pathStack.length === 0) {
                    this.MyConfig.pathStack.push({
                        categoryId: "cat00000",
                        categoryName: "BestBuy"
                    });
                }
                // go ProductList page 
                this.MyConfig.selectedRow = {
                    categoryId: this.view.SegmentCategories.selectedRowItems[0].categoryid,
                    categoryName: this.view.SegmentCategories.selectedRowItems[0].LabelRowCategory
                };
                this.MyConfig.bByCategory = true;

                this.HomePage_Segment_Row_OnClick_Navi_ProductList();
                kony.application.dismissLoadingScreen();
            }
        } else {
            // no push cur element back
            alert("This category is N/A !!");
            kony.application.dismissLoadingScreen();
        }
    },

    getCategoriesErrorCallback: function() {
        alert("Get Categories Integration services failed !!");
        kony.application.dismissLoadingScreen();
    },

    //change Lable text to show path
    setPathtoLabel: function() {
        var path = "Home";
        // the 1st element in array is "BestBuy", skip it and iterate from 2nd one
        for (var i = 1; i < this.MyConfig.pathStack.length; i++) {
            path = path + "->" + this.MyConfig.pathStack[i].categoryName;
        }
        this.view.LabelHomePath.text = path;

        if (this.MyConfig.pathStack.length > 1) {
            this.view.CompHeader.isVisibleBack = true;
        } else {
            this.view.CompHeader.isVisibleBack = false;
        }
    },

    // setup segment animation, rows translate from right to left
    HomePage_Segment_Animation: function() {
        var animConfig = {
            "duration": 1,
            "iterationCount": 1,
            "delay": 0,
            "fillMode": kony.anim.FORWARDS
        };
        var transformProp1 = kony.ui.makeAffineTransform();
        var transformProp2 = kony.ui.makeAffineTransform();
        transformProp1.translate(200, 0);
        transformProp2.translate(0, 0);
        var animDef = {
            0: {
                "anchorPoint": {
                    "x": 0.5,
                    "y": 0.5
                },
                "transform": transformProp1
            },
            100: {
                "anchorPoint": {
                    "x": 0.5,
                    "y": 0.5
                },
                "transform": transformProp2
            }
        };
        this.view.SegmentCategories.setAnimations({
            visible: {
                definition: kony.ui.createAnimation(animDef),
                config: animConfig
            }
        });
    },

    HomePage_Segment_OnClick: function() {
        //this.MyConfig.selectedCategoryId = this.view.SegmentCategories.selectedRowItems[0].categoryid;
        this.MyConfig.pathStack.push({
            categoryId: this.view.SegmentCategories.selectedRowItems[0].categoryid,
            categoryName: this.view.SegmentCategories.selectedRowItems[0].LabelRowCategory
        });
        this.HomePage_GetCategoriesData();
    },

    HomePage_Header_Back_OnClick: function() {
        // just pop the last element when pathStack.length > 1
        if (this.MyConfig.pathStack.length > 1){
          	this.MyConfig.pathStack.pop();
        }
        this.HomePage_GetCategoriesData();
    },

    HomePage_Header_Search_OnClick: function() {
        this.view.FlexSearchBar.animate(
            kony.ui.createAnimation({
                "100": {
                    "top": "10%",
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    }
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.3
            }, {}
        );
        this.view.FlexMainContent.animate(
            kony.ui.createAnimation({
                "100": {
                    "top": "20%",
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    }
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.3
            }, {}
        );

        this.view.FlexMainContent.skin = "slFboxGray";
    },

    HomePage_Search_BtnCancel_OnClick: function() {
        this.view.FlexSearchBar.animate(
            kony.ui.createAnimation({
                "100": {
                    "top": "-20%",
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    }
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.35
            }, {

            });
        this.view.FlexMainContent.animate(
            kony.ui.createAnimation({
                "100": {
                    "top": "10%",
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    }
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.35
            }, {

            });
        this.view.TextSearchKey.text = "";
        this.view.FlexMainContent.skin = "slFbox";
    },

    // Search on done
    Search_Input_OnDone: function() {
        var currentSearchKey = this.view.TextSearchKey.text;
        if (currentSearchKey === null || currentSearchKey.trim() === "") {
            alert("Cannot search empty string !!");
        } else {
            currentSearchKey = this.view.TextSearchKey.text.trim().replace(" ", "+");
            if (!currentSearchKey.match(/^[a-zA-z][a-zA-Z0-9\+]+$/)) {
                alert("Not a valid string !!");
            } else {
                this.view.TextSearchKey.text = "";
                this.MyConfig.bByCategory = false;
                this.MyConfig.searchKey = currentSearchKey;
                this.HomePage_Segment_Row_OnClick_Navi_ProductList();
            }
        }
        //this.HomePage_Search_BtnCancel_OnClick();
    },

    HomePage_Segment_Row_OnClick_Navi_ProductList: function() {
        var ntf = new kony.mvc.Navigation("ProductListPage");
        ntf.navigate(this.MyConfig);
        //this.MyConfig.selectedCategoryId = this.MyConfig.pathStack[this.MyConfig.pathStack.length-2];
    },


});