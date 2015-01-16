(function () {
    'use strict';

    // NOTE: would have 'History', but it is protected in JS
    angular.module('pacificOcean')
        .factory('Wikipedia', Wikipedia);

    /**
     * @ngdoc service
     * @name pacificOcean.Wikipedia
     * @description Service reponsible for fetching pacific ocean history content from wikipedia
     *
     * @requires $http
     */
    
    // @ngInject
    function Wikipedia($http) {

        /**
         * @ngdoc function
         * @methodOf pacificOcean.Wikipedia
         * @name fetchHistory
         * @description Retrieves pacific ocean history from wikipedia
         *
         * @returns {Promise} $http promise with pacific ocean history data
         */

        function fetchHistory() {
            var url = [
                'http://en.wikipedia.org',
                'w',
                'api.php?format=json&action=query&titles=Pacific_Ocean&prop=revisions&rvprop=content'
            ].join('/');

            return $http.jsonp(url);
        }

        return {
            fetchHistory: fetchHistory
        };
    }
})();