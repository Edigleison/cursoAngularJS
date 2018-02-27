(function(){
    'use strict';
    
    var app = angular.module("customersApp",['ngRoute','customer']);
    
    app.config(config);
    
    config.$inject = ['$routeProvider']
    
    function config($routeProvider){
        $routeProvider
            .when('/', {
                controller: 'CustomerController',
                templateUrl: 'app/views/customer.html',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/' });
        
    }
    
    
}());