(function () {
    'use strict';

    angular.module('pacificOcean')
        .directive('navigation', navigation);

    /**
     * @ngdoc directive
     * @name pacificOcean.navigation
     * @description Navigation bar as directive
     * should transclude (include within its scope) any elements defined within its markup
     *
     */
    
    // @ngInject
    function navigation() {
        return {
            restrict: 'E',
            replace: true,
            scope: true,
            transclude: true,
            templateUrl: 'app/views/navigation.tpl.html',
            link: function (scope) {

            }
        };
    }
})();