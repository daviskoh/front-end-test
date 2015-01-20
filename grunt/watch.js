'use strict';

module.exports = {
    scripts: {
        files: ['<%= meta.src %>/app/*.js'],
        tasks: [
            'test'
        ],
        options: {
            spawn: false,
            livereload: true
        }
    },

    src: {
        files: ['<%= meta.src %>/app/views/*.html', '<%= meta.src %>/index.html'],
        tasks: ['html2js'],
        options: {
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
