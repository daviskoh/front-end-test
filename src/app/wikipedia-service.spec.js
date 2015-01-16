'use strict';

describe('Wikipedia', function () {
    var $httpBackend,
        Wikipedia;

    beforeEach(module('pacificOcean'));

    beforeEach(inject(function (_$httpBackend_, _Wikipedia_) {
        $httpBackend = _$httpBackend_;
        Wikipedia = _Wikipedia_;
    }));

    it('exists', function () {
        expect(Wikipedia).toBeDefined();
    });

    describe('Wikipedia.fetchHistory', function () {
        afterEach(function () {
            $httpBackend.flush();
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('should make a GET to wikipedia', function () {
            var url = [
                'http://en.wikipedia.org',
                'w',
                'api.php?format=json&action=query&titles=Pacific_Ocean&prop=revisions&rvprop=content'
            ].join('/');

            $httpBackend.expectJSONP(url).respond('');

            Wikipedia.fetchHistory();
        });
    });
});