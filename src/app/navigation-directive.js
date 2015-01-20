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
            link: function (scope, element, attrs) {
                var navigationBar = angular.element(element.find('div')[1]),
                    content = angular.element(document.querySelector('.content'));

                scope.show = false;

                scope.toggleNav = function () {
                    scope.show = !scope.show;

                    // shift content & navigation bar
                    if (scope.show) {
                        navigationBar.css('width', '80%');
                        content.css('width', '80%');
                        return;
                    }

                    navigationBar.css('width', '100%');
                    content.css('width', '100%');
                };
            }
        };
    }
})();