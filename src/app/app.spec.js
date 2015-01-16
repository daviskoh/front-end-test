'use strict';

describe('pacificOcean', function () {
    var $state;

    beforeEach(module('ui.router', 'pacificOcean'));

    beforeEach(inject(function (_$state_) {
        $state = _$state_;
    }));

    describe('/ Route', function () {
        var Images;

        beforeEach(inject(function (_Images_) {
            Images = _Images_;

            spyOn(Images, 'fetch');
        }));

        it('should resolve image data when state is entered', function () {
            $state.go('home');

            expect(Images.fetch).toHaveBeenCalled();
        });
    });

    describe('/history Route', function () {
        var Wikipedia;

        beforeEach(inject(function (_Wikipedia_) {
            Wikipedia = _Wikipedia_;

            spyOn(Wikipedia, 'fetchData');
        }));

        it('should resolve image data when state is entered', function () {
            $state.go('history');

            expect(Wikipedia.fetchData).toHaveBeenCalled();
        });
    });
});