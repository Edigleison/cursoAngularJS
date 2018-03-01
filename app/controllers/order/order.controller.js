(function(){
    'use strict'
    
    angular.module('order').controller('OrderController', OrderController);
    OrderController.$inject = ['OrderService','$routeParams'];
    
    function OrderController(OrderService, $routeParams){
        const vm = this;
        vm.customerId = parseInt($routeParams.customerId);
        vm.customer = null;
        init();
        
        function init(){
            OrderService.getOrders(vm.customerId)
                .then(function (res){
                    vm.customer = res.data;
                });
        }
    }
    
})();