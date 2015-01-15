(function (window, angular, undefined) {
    'use strict';

    /**
     * when angular is loaded, bootstraps the app
     */

    angular.element(document).ready(function () {
        var _appName = 'pacificOcean';

        // Run Angular App
        angular.bootstrap(document, [_appName]);
    });
}(window, angular));
