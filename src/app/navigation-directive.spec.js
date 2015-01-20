'use strict';

describe('Nav', function () {
    var $compile,
        $rootScope,
        element;

    function compileHTML(html) {
        var element;

        element = $compile(html)($rootScope);

        $rootScope.$digest();

        return element;
    }

    beforeEach(module('pacificOcean.templates', 'pacificOcean'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('should compile', function () {
        // compile direct & assign to element
        element = compileHTML('<navigation></navigation>');

        // expect element to exist
        expect(element).toBeDefined();

        // check for icon
        expect(element.find('div').length).toBe(5);
    });

    it('should show transcluded links on open', function () {
        var navStart = '<navigation>',
            navEnd = '</navigation>',
            link = '<a></a>';

        element = compileHTML(navStart + link + link + link + navEnd);

        expect(element.find('ng-transclude').find('a').length).toBe(3);
    });

    describe('Nav.toggleNav', function () {
        
    });
});
