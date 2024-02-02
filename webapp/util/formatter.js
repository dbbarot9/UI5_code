sap.ui.define([
], function() {
    'use strict';
    return{
        getStatus:function(status){
            var oComponent =  this.getOwnerComponent();
           var statusValue = oComponent.getModel().getProperty('/status');
            for (let index = 0; index < statusValue.length; index++) {
                const element = statusValue[index];
                if (element.key === status) {
                    return element.value;
                }
                
            }
        },
        getColorCode:function(status){
            // debugger;
            switch (status) {
                case 'A':
                    return "Success";
                    break;
            
                case 'D':
                    return "Warning";
                    break;

                case 'O':  
                return "Error";
                break;  
            }
        }
    }
});