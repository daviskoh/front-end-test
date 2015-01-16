'use strict';

describe('HomeViewCtrl', function () {
    var ctrl;

    var mockImages = {
        fetch: function () {},
        getImages: function () {}
    };

    beforeEach(module('pacificOcean'));

    beforeEach(inject(function ($controller, $rootScope) {
        ctrl = $controller('HomeViewCtrl', {
            Images: mockImages
        });

        $rootScope.$digest();
    }));

    it('should exist', function () {
        expect(ctrl).toBeDefined();
    });
});