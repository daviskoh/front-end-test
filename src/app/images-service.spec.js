'use strict';

describe('Images', function () {
    var $rootScope,
        $httpBackend,
        Images;

    beforeEach(module('pacificOcean'));

    beforeEach(inject(function (_$rootScope_, _$httpBackend_, _Images_) {
        $rootScope = _$rootScope_;
        $httpBackend = _$httpBackend_;
        Images = _Images_;
    }));

    it('should exist', function () {
        expect(Images).toBeDefined();
    });

    describe('Images.getImages', function () {
        it('should return the privately stored images object', function () {
            expect(Images.getImages()).toEqual({});
        });

        it('should return a copy not a reference', function () {
            Images.getImages().meow = 'dude';

            expect(Images.getImages()).toEqual({});
        });
    });

    describe('Images.fetch', function () {
        var url = 'data/images.json';

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('should make a GET to the google api', function () {
            $httpBackend.expectGET(url).respond('');

            Images.fetch();

            $httpBackend.flush();
        });

        it('should set the needed images internally after fetching them', function () {
            var resp = {
                responseData: {
                    results: [{

                    }, {
                        url: 'http://advocacy.britannica.com/blog/advocacy/wp-content/uploads/whale1.jpg'
                    }, {
                        url: 'http://images.nationalgeographic.com/wpf/media-live/photos/000/181/cache/deep-sea09-viper-fish_18169_600x450.jpg'
                    }, {

                    }, {

                    }, {

                    }, {
                        url: 'http://education-portal.com/cimages/multimages/16/Pacific_Viperfish.png'
                    }]
                }
            };

            $httpBackend.whenGET(url).respond(resp);

            Images.fetch();

            $httpBackend.flush();

            var images = Images.getImages();

            expect(images.whale).toBe(resp.responseData.results[1].url);
            expect(images.smallFish).toBe(resp.responseData.results[2].url);
            expect(images.bigFish).toBe(resp.responseData.results[6].url);
        });
    });
});