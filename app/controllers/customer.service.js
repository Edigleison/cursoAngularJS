(function(){
    'user strict'

    var app = angular.module('customer');
    app.factory('CustomerService', CustomerService);

    CustomerService.$inject = ['$http'];

    function CustomerService($http){
        var factory = {};
        factory.getCustomers = function(){
            return $http.get('/customers');
        }
        
        return factory;
    }

    
 
 })();