(function(){
    'use strict';
    
    angular.module("customer").controller('CustomerController', CustomerController);
    
    CustomerController.$inject = [];
    
    function CustomerController(){
        this.customers = [
            {
                name: "John",
                adress: {
                    city: "New Yourk"    
                }
            },
            {
                name: "Dave",
                adress: {
                    city: "Los Angeles"    
                }
            }
        ];
    }
    
    
}());