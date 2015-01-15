(function () {
    'use strict';

    angular.module('pacificOcean')
        .controller('HomeViewCtrl', HomeViewCtrl);

    // TODO: add grunt ngDoc

    /**
     * @ngdoc controller
     * @name pacificOcean.CartViewController
     * @description Home controller responsible for initial state.
     *
     * @requires Images
     */
    
    // @ngInject
    function HomeViewCtrl(Images) {
        /* jshint validthis: true */
        var vm = this;

        vm.images = Images.getImages();
    }
})();