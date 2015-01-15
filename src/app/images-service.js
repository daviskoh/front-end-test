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
        var _images = {};

        /**
         * @ngdoc function
         * @methodOf pacificOcean.Images
         * @name fetch
         * @description Retrieves pacific ocean images from local json
         *
         * @returns {Promise} $http promise with image data
         */

        function fetch() {
            var url = 'data/images.json';

            return $http
                .get(url)
                .success(function (resp) {
                    if (!resp) return;

                    _images.whale = resp.responseData.results[1].url;
                    _images.smallFish = resp.responseData.results[2].url;
                    _images.bigFish = resp.responseData.results[6].url;

                    return resp;
                });
        }

        /**
         * @ngdoc function
         * @methodOf pacificOcean.Images
         * @name getImages
         * @description Returns a copy of locally stored image from a Images.fetch call
         *
         * @returns {Object} Big fish, small fish, and whale images
         */

        function getImages() {
            return angular.copy(_images);
        }

        return {
            fetch: fetch,
            getImages: getImages
        };
    }
})();