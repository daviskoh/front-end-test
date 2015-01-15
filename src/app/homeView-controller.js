(function () {
    'use strict';

    angular.module('pacificOcean')
        .controller('HomeViewCtrl', HomeViewCtrl);
    
    // @ngInject
    function HomeViewCtrl() {
        console.log('meow');
    }
})();