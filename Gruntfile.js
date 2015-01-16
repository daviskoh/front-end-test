'use strict';

module.exports = function (grunt) {
    require('load-grunt-config')(grunt);

    grunt.registerTask('test', 'Run unit tests', [
        'jshint',
        // needed for directive unit testing
        'concurrent:test',
        'karma:unit'
    ]);

    grunt.registerTask('serve', 'Runs a server on localhost:3000', [
        'test',
        'compass:dev',
        'connect:app',
        'watch'
    ]);

    // running grunt without specifying any task will show list of tasks available
    grunt.registerTask('default', ['availabletasks']);
};