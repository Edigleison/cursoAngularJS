(function(){
    'use strict';
    
    angular.module("customer").controller('CustomerController', CustomerController);
    
    CustomerController.$inject = ['CustomerService'];
    
    function CustomerController(CustomerService){
        this.customers = [];
        init();
        
        function init(){
            CustomerService.getCustomers()
                .then(function (customers){
                    this.customers = customers;
                });
        }
        
    }
    
    
}());