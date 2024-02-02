sap.ui.define([
    'priyanka/controller/BaseController',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator'
], function(BaseController,Filter,FilterOperator) {
    'use strict';
    return BaseController.extend('priyanka.controller.View1',{
        onInit: function(){
            this.oRouter = this.getOwnerComponent().getRouter();
        },
        callView2:function(sFruitId){
          //   var oAppView = this.getView().getParent().getParent();
          //     var oView2 = oAppView.getDetailPages()[1];
          //   oAppView.to(oView2);
             this.oRouter.navTo("detail",
                        {
                            fruitId:sFruitId
                        });
        },       
        multiDelete:function(){
            var listObj = this.getView().byId("idList");
            var selItems = listObj.getSelectedItems();
            selItems.forEach(element => {
                listObj.removeItem(element);
            });
        },
        onSearch:function(oEvent){
            debugger;
            var sVal = oEvent.getParameter("query");
            if(!sVal){
                var sVal = oEvent.getParameter("newValue");
            }
            var oFilter1 = new Filter("CATEGORY",FilterOperator.Contains,sVal);
            // var oFilter2 = new Filter("CATEGORY",)
            var oBinding = this.getView().byId("idList").getBinding("items");
            oBinding.filter(oFilter1);
        },
        // onDelete:function(oEvent){
        //     // Event parameter to get item which is selected.
        //     var itemToBeDeleted = oEvent.getParameter("listItem");
        //     // get the object who generate the event
        //     var objList = oEvent.getSource(); 
        //     // remove item which was selected.
        //     objList.removeItem(itemToBeDeleted);
        // },
        // multiDelete:function(oEvent){
        //     // debugger;
        //     // get the list object byID.
        //     var listObj = this.getView().byId("idList");
        //     // get the all selected items
        //     var selItems = listObj.getSelectedItems();
        //     selItems.forEach(element => {
        //         listObj.removeItem(element);
        //     });
        // },
        onSelect:function(oEvent){
            var ItemData = oEvent.getParameter("listItem");
            var saddress = ItemData.getBindingContextPath();
         //    var oview2 = this.getView().getParent().getParent().getDetailPages()[1];
         //    oview2.bindElement(saddress);
             var sVal = saddress.split("/")[saddress.split("/").length - 1];
             this.callView2(sVal);
        }
        // onSearch: function(oEvent){
        //     var sVal = oEvent.getParameter("query");
        //     var oFilter1 = new Filter("name",FilterOperator.Contains,sVal);
        //     var oFilter2 = new Filter("taste",FilterOperator.Contains,sVal);
        //     var oBinding = this.getView().byId("idList").getBinding("items");
        //     var oFilter = new Filter({
        //         filters:[oFilter1,oFilter2],
        //         and : false
        //     });
        //     oBinding.filter(oFilter);
        // }
    });
    
});