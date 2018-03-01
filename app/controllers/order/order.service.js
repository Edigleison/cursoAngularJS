(function(){
    'user strict'

    var app = angular.module('order');
    app.service('OrderService', OrderService);

    OrderService.$inject = ['$http'];

    function OrderService($http){
        this.getOrders = function(idCustomer){
            return $http.get('/service/customers/'+idCustomer);
        }
    }

    
 
 })();