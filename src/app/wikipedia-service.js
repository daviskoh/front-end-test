(function () {
    'use strict';

    // NOTE: would have named it 'History', but it is protected in JS
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
         * @name fetchData
         * @description Retrieves pacific ocean history from wikipedia
         *
         * @returns {Promise} $http promise with pacific ocean history data
         */

        function fetchData() {
            var url = 'data/history.json';

            return $http.get(url);
        }

        return {
            fetchData: fetchData
        };
    }
})();