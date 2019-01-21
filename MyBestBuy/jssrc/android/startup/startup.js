//startup.js
var globalhttpheaders = {};
var appConfig = {
    appId: "MyBestBuy",
    appName: "MyBestBuy",
    appVersion: "1.0.0",
    isturlbase: "https://m100025081001.konycloud.com/services",
    isDebug: true,
    isMFApp: true,
    appKey: "e0de7595adcbbf2c29548f6c8a759d74",
    appSecret: "4702efeace96ea96513686d0681e17f4",
    serviceUrl: "https://100025081.auth.konycloud.com/appconfig",
    svcDoc: {
        "selflink": "https://100025081.auth.konycloud.com/appconfig",
        "app_version": "1.0",
        "integsvc": {
            "BestBuyServices": "https://m100025081001.konycloud.com/services/BestBuyServices"
        },
        "service_doc_etag": "0000016759C672C8",
        "appId": "a0cfed89-5fac-4b19-a991-d5e06c27cbbe",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "BestBuy",
        "reportingsvc": {
            "session": "https://m100025081001.konycloud.com/services/IST",
            "custom": "https://m100025081001.konycloud.com/services/CMS"
        },
        "baseId": "ed402ec5-4a93-4b90-b785-c04139962dd7",
        "app_default_version": "1.0",
        "services_meta": {
            "BestBuyServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://m100025081001.konycloud.com/services/BestBuyServices"
            }
        }
    },
    runtimeAppVersion: "1.0",
    eventTypes: ["FormEntry", "Error", "Crash"],
};
sessionID = "";

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        isMVC: true,
        APILevel: 8300
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    applicationController = require("applicationController");
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: applicationController.appInit,
        postappinit: applicationController.postAppInitCallBack,
        showstartupform: function() {
            new kony.mvc.Navigation("HomePage").navigate();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_KonyLogger"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_binarydata"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.ND_binary_util"
    });
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//This is the entry point for the application.When Locale comes,Local API call will be the entry point.
loadResources();
debugger;