'use strict';

module.exports = {
    app: {
        options: {
            module: 'pacificOcean.templates',
            base: 'src',
            useStrict: true,
            singleModule: true,
            htmlmin: {
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                removeComments: true
            }
        },
        src: [ 'src/app/views/*.tpl.html'],
        dest: 'src/app/templates.js'
    }
};
