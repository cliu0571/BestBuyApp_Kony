define({
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("BestBuyComponents.CompHeader", "CompHeader", "CompHeaderController");
        kony.application.registerMaster({
            "namespace": "BestBuyComponents",
            "classname": "CompHeader",
            "name": "BestBuyComponents.CompHeader"
        });
        kony.mvc.registry.add("FlexRowCategory", "FlexRowCategory", "FlexRowCategoryController");
        kony.mvc.registry.add("FlexRowProductList", "FlexRowProductList", "FlexRowProductListController");
        kony.mvc.registry.add("FlexRowReview", "FlexRowReview", "FlexRowReviewController");
        kony.mvc.registry.add("HomePage", "HomePage", "HomePageController");
        kony.mvc.registry.add("ProductDetailPage", "ProductDetailPage", "ProductDetailPageController");
        kony.mvc.registry.add("ProductListPage", "ProductListPage", "ProductListPageController");
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new kony.mvc.Navigation("HomePage").navigate();
    }
});