module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['snapshots'],
        htmlSnapshot: {
            debug: {
                options: {
                    snapshotPath: 'snapshots/',
                    sitePath: 'http://localhost:777/',
                    msWaitForPages: 1000,
                    urls: [
                        '#!/',
                        '#!/partners'
                    ]
                }
            },
            prod: {
                options: {}
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-html-snapshot');

    grunt.registerTask('default', ['clean', 'htmlSnapshot']);
}