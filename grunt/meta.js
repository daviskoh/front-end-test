'use strict';

/**
 * to be referenced in setup of other tasks
 */

module.exports = function (grunt) {
    return {
        pkg: grunt.file.readJSON('package.json'),
        src: 'src',
        config: 'config'
    };
};
