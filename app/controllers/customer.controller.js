(function(){
    'use strict';
    
    angular.module("customer").controller('CustomerController', CustomerController);
    
    CustomerController.$inject = ['CustomerService'];
    
    function CustomerController(CustomerService){
        const vm= this;
        vm.customers = [];
        init();
        
        function init(){
            CustomerService.getCustomers()
                .then(function (res){
                    vm.customers = res.data;
                });
        }
        
    }
    
    
}());