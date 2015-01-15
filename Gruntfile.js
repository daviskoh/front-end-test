'use strict';

module.exports = function (grunt) {
    require('load-grunt-config')(grunt);

    grunt.registerTask('serve', 'Runs a server on localhost:3000', [
        // 'test',
        'concurrent:dev',
        'connect:app',
        'watch'
    ]);

    // running grunt without specifying any task will show list of tasks available
    grunt.registerTask('default', ['availabletasks']);
};