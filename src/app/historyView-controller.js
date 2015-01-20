(function () {
    'use strict';

    angular.module('pacificOcean')
        .controller('HistoryViewCtrl', HistoryViewCtrl);

    /**
     * @ngdoc controller
     * @name pacificOcean.controllers:HistoryViewCtrl
     * @description Controller responsible for history info popup.
     *
     * @requires Wikipedia
     */
    
    // @ngInject
    function HistoryViewCtrl(Wikipedia) {
        /* jshint validthis: true */
        var vm = this;

        vm.history = Wikipedia.getHistory();
    }
})();