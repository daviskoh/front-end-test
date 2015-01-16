(function () {
    'use strict';

    angular.module('pacificOcean')
        .directive('Navigation', Navigation);
    
    // @ngInject
    function Navigation() {
        return {
            restrict: 'E',
            scope: {
                
            },
            templateUrl: 'app/views/nav.tpl.html',
            link: function (scope) {
                
            }
        };
    }
})();