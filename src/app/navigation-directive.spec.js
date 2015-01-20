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

        expect(element.find('ng-transclude').length).toBe(1);
    });

    it('should transclude element written within its scope', function () {
        var navStart = '<navigation>',
            navEnd = '</navigation>',
            link = '<a></a>';

        element = compileHTML(navStart + link + link + link + navEnd);

        expect(element.find('a').length).toBe(3);
    });
});
