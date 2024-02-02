sap.ui.define(['priyanka/controller/BaseController',
                "sap/ui/core/routing/History"], 
function(BaseController,History) {
    'use strict';
    return BaseController.extend("priyanka.controller.Supplier",{
        onInit:function() {
            console.log('1');
            //  debugger;
              this.oRouter = this.getOwnerComponent().getRouter();
              console.log('2');
          //    this.oRouter = this.getOwnerComponent().getRouter();
             this.oRouter.getRoute("supplier").attachMatched(this.testing, this);
             console.log('3');
           //   this.oRouter.getRoute("detail").attachMatched(this.herculis, this);
          },
          testing:function(oEvent){
            //  debugger;
              var sPath = oEvent.getParameter("arguments").supplierId;
              console.log('4');
        //      var sId = oEvent.getParameter("arguments").fruitId;
             var sval = "/supplier/" + sPath;
             console.log('5');
        //     var sPath = "/fruits/" + sId;
             this.getView().bindElement(sval);
           //  this.getView().bindElement(sPath);
          },
          backtoView2:function(){
            var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("home");
			}
          }
    });
    
});