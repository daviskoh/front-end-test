(function () {
    'use strict';

    angular.module('pacificOcean')
        .factory('Images', Images);

    /**
     * @ngdoc service
     * @name pacificOcean.Images
     * @description Service reponsible for fetching images via google api
     *
     * @requires $http
     */
    
    // @ngInject
    function Images($http) {
        function fetch() {
            var url = [
                'https://ajax.googleapis.com/',
                'ajax/',
                'services/',
                'search/',
                'images?v=1.0&q=Pacific%20ocean%20organisms+&rsz=8&&start=6'
            ].join('');

            return $http.get(url);
        }

        return {
            fetch: fetch
        };
    }
})();