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
        var _history = {};

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

            return $http
                .get(url)
                .success(function (resp) {
                    if (resp) _history = resp;

                    return resp;
                });
        }

        /**
         * @ngdoc function
         * @methodOf pacificOcean.Wikipedia
         * @name getHistory
         * @description Returns a copy of locally stored history from a Wikipedia.fetchData call
         *
         * @returns {Object} Retrieves the title and specific content of the Pacific Ocean page
         */

        function getHistory() {
            return angular.copy(_history);
        }

        return {
            fetchData: fetchData,
            getHistory: getHistory
        };
    }
})();