(function() {
    'use strict';

    angular
        .module('oauthdbApp')
        .factory('JobHistorySearch', JobHistorySearch);

    JobHistorySearch.$inject = ['$resource'];

    function JobHistorySearch($resource) {
        var resourceUrl =  'api/_search/job-histories/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
