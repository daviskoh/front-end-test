'use strict';

describe('HistoryViewCtrl', function () {
    var ctrl;

    beforeEach(module('pacificOcean'));

    beforeEach(inject(function ($controller, $rootScope) {
        ctrl = $controller('HistoryViewCtrl', {
            history: ''
        });

        $rootScope.$digest();
    }));

    it('should exist', function () {
        expect(ctrl).toBeDefined();
    });
});