sap.ui.define([
    'sap/ui/core/mvc/Controller','priyanka/util/formatter'
], function( Controller,myFormatter) {
    'use strict';
   
    return Controller.extend('priyanka.controller.BaseController',{
        formatter : myFormatter
    });
    
});