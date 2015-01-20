'use strict';

function middleware(connect, options, middlwares) {
    return [
        connect.compress(),
        connect.static(options.base[0])
    ];
}

module.exports = function (grunt) {
    return {
        app: {
            options: {
                port: 3000,
                hostname: '*',
                base: '<%= meta.src %>',
                middleware: middleware
            }
        },

        docs: {
            options: {
                port: 4000,
                base: 'docs'
            }
        }
    };
};