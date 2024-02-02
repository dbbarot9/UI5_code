sap.ui.define([
    'sap/ui/core/UIComponent',

], function( UIComponent) {
    'use strict';
    return UIComponent.extend('priyanka.Component',{
        metadata:{
            manifest:'json'
        },
        init:function(){
            UIComponent.prototype.init.apply(this);
            // Router 
            var oRouter = this.getRouter();
            oRouter.initialize();
        },
      //  createContent(){
            // var oRootView = new sap.ui.view({
            //     viewName:'priyanka.view.App',
            //     id:'idRootView',
            //     type:'XML'
            // });
            // var oAppView = oRootView.byId('idAppCon');
            // var oView1 = new sap.ui.view({
            //     viewName:'priyanka.view.view1',
            //     id:'idView1',
            //     type:'XML'
            // });
            // var oView2 = new sap.ui.view({
            //     viewName:'priyanka.view.view2',
            //     id:'idView2',
            //     type:'XML'
            // })
            // var oEmpty = new sap.ui.view({
            //     viewName:'priyanka.view.Empty',
            //     id:'idEmpty',
            //     type:'XML'
            // })
            // oAppView.addMasterPage(oView1).addDetailPage(oEmpty).addDetailPage(oView2);
            // return oRootView;
     //   },
        destroy:function(){

        }

    })
    
});