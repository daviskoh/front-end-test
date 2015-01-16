'use strict';

module.exports = {
    dev: [
        // use newer to grunt task w/ newer files only
        'newer:compass:dev',
        // NOTE: will cause time delays due to html templates compiling into templates.js
        'newer:html2js:app'
    ],

    test: [
        'newer:html2js:app'
    ],
};
