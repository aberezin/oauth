(function() {
    'use strict';

    angular
        .module('oauthdbApp')
        .controller('JobHistoryDetailController', JobHistoryDetailController);

    JobHistoryDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'JobHistory', 'Job', 'Department', 'Employee'];

    function JobHistoryDetailController($scope, $rootScope, $stateParams, entity, JobHistory, Job, Department, Employee) {
        var vm = this;

        vm.jobHistory = entity;

        var unsubscribe = $rootScope.$on('oauthdbApp:jobHistoryUpdate', function(event, result) {
            vm.jobHistory = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
