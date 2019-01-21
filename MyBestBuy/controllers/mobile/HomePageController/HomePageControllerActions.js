define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClickBack defined for CompHeader **/
    AS_UWI_f30acd4fc6054bb081454494d2591513: function AS_UWI_f30acd4fc6054bb081454494d2591513(eventobject) {
        var self = this;
        return self.HomePage_Header_Back_OnClick.call(this);
    },
    /** onClickSearch defined for CompHeader **/
    AS_UWI_gd43d72befb84daf9b1e3dd40ca1daf7: function AS_UWI_gd43d72befb84daf9b1e3dd40ca1daf7(eventobject) {
        var self = this;
        return self.HomePage_Header_Search_OnClick.call(this);
    },
    /** onRowClick defined for SegmentCategories **/
    AS_Segment_e6dcc33605844182ba62b9a8d6a1f865: function AS_Segment_e6dcc33605844182ba62b9a8d6a1f865(eventobject, sectionNumber, rowNumber) {
        var self = this;
        return self.HomePage_Segment_OnClick.call(this);
    },
    /** onClick defined for ButtonCancel **/
    AS_Button_fd274c81a6ef4c45ac473a0570e6c51c: function AS_Button_fd274c81a6ef4c45ac473a0570e6c51c(eventobject) {
        var self = this;
        return self.HomePage_Search_BtnCancel_OnClick.call(this);
    },
    /** onDone defined for TextSearchKey **/
    AS_TextField_da61863493ef4fc19b673a548316ccf8: function AS_TextField_da61863493ef4fc19b673a548316ccf8(eventobject, changedtext) {
        var self = this;
        return self.Search_Input_OnDone.call(this);
    },
    /** init defined for HomePage **/
    AS_Form_g662fffaed7044f3946cbf9398bb4664: function AS_Form_g662fffaed7044f3946cbf9398bb4664(eventobject) {
        var self = this;
        self.HomePage_Init.call(this);
        self.HomePage_GetCategoriesData.call(this);
    },
    /** postShow defined for HomePage **/
    AS_Form_i3e508db23554c2b9d339209b510976a: function AS_Form_i3e508db23554c2b9d339209b510976a(eventobject) {
        var self = this;
        return self.HomePage_Segment_Animation.call(this);
    },
    /** onDeviceBack defined for HomePage **/
    AS_Form_ede91c95975f4a6ab5c130046462c9c5: function AS_Form_ede91c95975f4a6ab5c130046462c9c5(eventobject) {
        var self = this;
        return self.HomePage_Header_Back_OnClick.call(this);
    },
    /** onDeviceBack defined for HomePage **/
    AS_Form_adde022f49794c20be95c34363f1e2b2: function AS_Form_adde022f49794c20be95c34363f1e2b2(eventobject) {
        var self = this;
        return self.HomePage_Header_Back_OnClick.call(this);
    }
});