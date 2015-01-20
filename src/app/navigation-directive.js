(function () {
    'use strict';

    angular.module('pacificOcean')
        .directive('navigation', navigation);

    /**
     * @ngdoc directive
     * @name pacificOcean.directives:navigation
     * @restrict E
     * @element <a></a>
     * @scope
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
                var body = angular.element(document.body),
                    content = angular.element(document.querySelector('.content'));

                scope.show = false;

                /**
                 * @ngdoc function
                 * @methodOf pacificOcean.directives:navigation
                 * @name toggleNav
                 * @description Shows / hides left menu bar & adjusts content width accordingly
                 *
                 */

                scope.toggleNav = function () {
                    scope.show = !scope.show;

                    // shift content & navigation bar
                    if (scope.show) {
                        body.css('overflow', 'hidden');
                        content.addClass('content-shifted');
                        return;
                    }

                    body.css('overflow', '');
                    content.removeClass('content-shifted');
                };
            }
        };
    }
})();