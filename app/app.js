(function(){
    'use strict';
    
    var app = angular.module("customersApp",['ngRoute','customer','order']);
    
    app.config(config);
    
    config.$inject = ['$routeProvider', '$locationProvider']
    
    function config($routeProvider, $locationProvider){
        $routeProvider
            .when('/customers',{
                controller: 'CustomerController',
                templateUrl: 'app/views/customer/customers.html',
                controllerAs: 'vm'
            })
            .when('/customers/:customerId/orders', {
                controller: 'OrderController',
                templateUrl: 'app/views/order/orders.html',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/customers' });
        
        $locationProvider.html5Mode(true);
        
    }
    
    
}());