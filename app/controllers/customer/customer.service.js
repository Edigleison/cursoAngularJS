(function(){
    'user strict'

    var app = angular.module('customer');
    app.service('CustomerService', CustomerService);

    CustomerService.$inject = ['$http'];

    function CustomerService($http){
        this.getCustomers = function(){
            return $http.get('/service/customers');
        }
    }

    
 
 })();