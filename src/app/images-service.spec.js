'use strict';

describe('Images', function () {
    var $httpBackend,
        Images;

    beforeEach(module('pacificOcean'));

    beforeEach(inject(function (_$httpBackend_, _Images_) {
        $httpBackend = _$httpBackend_;
        Images = _Images_;
    }));

    it('should exist', function () {
        expect(Images).toBeDefined();
    });

    describe('Images.fetch', function () {
        it('should make a GET to the google api', function () {
            var url = [
                'https://ajax.googleapis.com/',
                'ajax/',
                'services/',
                'search/',
                'images?v=1.0&q=Pacific%20ocean%20organisms+&rsz=8&&start=6'
            ].join('');

            $httpBackend.expectGET(url).respond('');

            Images.fetch();

            $httpBackend.flush();
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });
    });
});