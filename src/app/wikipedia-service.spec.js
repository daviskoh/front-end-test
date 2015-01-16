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

    describe('Wikipedia.getHistory', function () {
        it('should return internally stored history data', function () {
            expect(Wikipedia.getHistory()).toEqual({});
        });

        it('should return a copy not a reference', function () {
            Wikipedia.getHistory().dude = 'bro';

            expect(Wikipedia.getHistory()).toEqual({});
        });
    });

    describe('Wikipedia.fetchData', function () {
        var url = 'data/history.json';

        afterEach(function () {
            $httpBackend.flush();
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('should make a GET to wikipedia', function () {
            $httpBackend.expectGET(url).respond('');

            Wikipedia.fetchData();
        });

        it('should store and abstract history data retrieved from call', function () {
            var resp = {
                title: 'meow',
                content: ['bro1', 'bro2']
            };

            $httpBackend.whenGET(url).respond(resp);

            Wikipedia
                .fetchData()
                .success(function () {
                    expect(Wikipedia.getHistory()).toEqual(resp);
                });
        });
    });
});