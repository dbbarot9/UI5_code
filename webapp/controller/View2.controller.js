sap.ui.define([
    'priyanka/controller/BaseController',
    "sap/ui/core/routing/History",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
], function(BaseController,History,MessageBox,MessageToast,Fragment) {
    'use strict';
    return BaseController.extend('priyanka.controller.View2',{
        callView1:function(){
           // var oAppView = this.getView().getParent().getParent();
           // var oEmpty = oAppView.getDetailPages()[0];
           // oAppView.to(oEmpty);
         //  debugger;
          // this.oRouter = this.getOwnerComponent().getRouter();
         //  this.oRouter.navTo("home");
         var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("home");
			}
        },
        onInit:function() {
          //  debugger;
            this.oRouter = this.getOwnerComponent().getRouter();
        //    this.oRouter = this.getOwnerComponent().getRouter();
           this.oRouter.getRoute("detail").attachMatched(this.herculis, this);
         //   this.oRouter.getRoute("detail").attachMatched(this.herculis, this);
        },
        herculis:function(oEvent){
          //  debugger;
            var sPath = oEvent.getParameter("arguments").fruitId;
      //      var sId = oEvent.getParameter("arguments").fruitId;
           var sval = "/" + sPath;
      //     var sPath = "/fruits/" + sId;
           this.getView().bindElement(sval);
         //  this.getView().bindElement(sPath);
        },
       
        onFilter:function(){
            MessageBox.confirm("This functionality is under development.");
        },
        oComponent: null,
        onF4Help:function(){
         //   MessageBox.confirm("This F4 functionality is under development.");
        // debugger;
            
            var that = this;
       //     var oList = new sap.ui.StandardListItem({title:'{name}',
         //                                            description:'{state}'});
            if (that.oComponent == null){
            Fragment.load({
                name:"priyanka.fragments.popup",
                type:'XML',
                id:'supplier',
                controller:this
            }).then(function(oObj)
            {
                that.oComponent = oObj;
                that.oComponent.setTitle('Select City');
                that.oComponent.open();
                that.getView().addDependent(that.oComponent);
               
                that.oComponent.bindAggregation("items",{
                    path:'/cities',
                    template: new sap.m.StandardListItem({title:'{name}',
                    description:'{state}'})
                    })
                });
        }
        else{
          //  that.oComponent.setTitle('Select City');
            that.oComponent.open();
        }
        },
        onSave:function(){
            MessageBox.confirm("Would you like to Save your fruit order?",{
                title:'Dhaval Barot',
                // dynamic binding of this controller attached
                onClose: this.myMessageClose.bind(this)
            });
        },
        myMessageClose : function(status){
            if (status === 'OK') {
                MessageToast.show("Order was created");
            }else
            {
                MessageBox.alert("Order was not created");
            }
        },
        onItemSelect: function(oEvent)
        {
            //debugger;
            var oRouter = this.getOwnerComponent().getRouter();
            var obj = oEvent.getParameter("listItem");
            var sval = obj.getBindingContextPath();
            console.log(sval);
            var sPath = sval.split("/")[sval.split("/").length - 1];
            console.log(sPath);
            // var path = "supplier/" + sPath;
            this.oRouter.navTo("supplier",{
                supplierId : sPath
            });
        },
        onReject: function(){
            MessageBox.alert("Oops!! Order was rejected");
        }
        // onInit: function(){
        //     //step1: get the router object
        //     this.oRouter = this.getOwnerComponent().getRouter();
        //     //step2: register the route matched handler event
        //     //"this" is the object of current controller, which we need to also
        //     //explicitly pass to our herculis function so that the function can access
        //     //our controller object
        //     //ROUTER.event(Which_Function, CONTROLLEROBJECT)
        //     this.oRouter.getRoute("detail").attachMatched(this.herculis, this);
        // },
        // ninja: "Ninja Turtle",
        // herculis: function(oEvent){
        //     //if i want to access my controller object as this pointer,
        //     //i must receive it from caller
        //     //this.globalVariableController
        //     //alert(this.ninja);

        //     //Step1: get the fruit ID from the event object
        //     //which will tell us which fruit was selected
        //     var sId = oEvent.getParameter("arguments").fruitId;
        //     //Step2: Reconstruct the FRUIT address of element
        //     var sPath = "/fruits/" + sId;
        //     //Step3: Bind the view with the element
        //     this.getView().bindElement(sPath);

        // }
    });
    
});