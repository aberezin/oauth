(function() {
    'use strict';

    angular
        .module('oauthdbApp')
        .controller('CustomerDetailController', CustomerDetailController);

    CustomerDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Customer'];

    function CustomerDetailController($scope, $rootScope, $stateParams, entity, Customer) {
        var vm = this;

        vm.customer = entity;

        var unsubscribe = $rootScope.$on('oauthdbApp:customerUpdate', function(event, result) {
            vm.customer = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
