module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['snapshots'],
        htmlSnapshot: {
            all: {
                options: {
                    snapshotPath: 'snapshots/',
                    sitePath: 'http://localhost:777/#!/',
                    fileNamePrefix: '',
                    msWaitForPages: 1000,
                    urls: [
                        '',
                        'partners',
                        'contact'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-html-snapshot');

    grunt.registerTask('default', ['clean', 'htmlSnapshot']);
}