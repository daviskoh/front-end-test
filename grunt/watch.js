'use strict';

module.exports = {
    scripts: {
        files: ['<%= meta.src %>/app/*.js'],
        tasks: [
            // TODO: uncomment running of 'test'
            'jshint'//,
            // 'test'
        ],
        options: {
            spawn: false,
            livereload: true
        }
    },

    styles: {
        files: ['<%= meta.src %>/styles/scss/*.scss'],
        tasks: ['compass:dev'],
        options: {
            livereload: true
        }
    },
    configFiles: {
        files: [
            'Gruntfile.js',
            // For when karma.conf.js is setup
            'config/*.js'
        ],
        tasks: [
            'jshint'
        ],
        options: {
            reload: true
        }
    }
};
