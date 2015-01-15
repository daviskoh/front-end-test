'use strict';

module.exports = {

    options: {
        configFile: './config/karma.conf.js'
    },

    unit: {
        background: false,
        browsers: ['PhantomJS'],
        logLevel: 'WARN',
        singleRun: true,
        runnerPort: 9999,
        plugins: [
            "karma-jasmine",
            "karma-phantomjs-launcher"
        ],
        reporters: ['progress']
    },

    watch: {
        singleRun: false,
        browsers: ['PhantomJS'],
        plugins: [
            "karma-jasmine",
            "karma-phantomjs-launcher"
        ],
        reporters: [
            'progress'
        ]
    }

};