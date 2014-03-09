module.exports = function(grunt) {
    grunt.initConfig({
        html2js: {
            options: {
                base: '.',
                module: 'ui-templates',
                rename: function(modulePath) {
                    var moduleName = modulePath.replace('app/views/partials/ui-bootstrap-tpls/', '').replace('.html', '');
                    return 'template' + '/' + moduleName + '.html';
                }
            },
            main: {
                src: ['app/views/partials/ui-bootstrap-tpls/**/*.html'],
                dest: 'ui-templates.js'
            }
        }
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['html2js']);
}