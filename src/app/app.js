(function () {
    'use strict';

    // NOTE: due to small size of app, all ng components will be defined on core pacificOcean mod
    // when apps gets larger, will need to use sub-module architecture & inject into core below
    angular.module('pacificOcean', [
        'ui.router'
    ])
        .config(configRoutes);

    // @ngInject
    function configRoutes($stateProvider, $urlRouterProvider) {
        // @ngInject
        function resolveImages(Images) {
            
        }

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/views/home.tpl.html',
                controller: 'HomeViewCtrl as vm',
                resolve: {
                    // images: resolveImages
                }
            })
            .state('history', {
                parent: 'home',
                url: '/history',
                templateUrl: 'app/views/history.tpl.html'
            });

        $urlRouterProvider.otherwise('/');
    }
})();