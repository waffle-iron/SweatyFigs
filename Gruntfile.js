module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },

    nodemon: {
      dev: {
        script: 'server/server.js'
      }
    }
  });

  /////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////

  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('start', [
    'nodemon'
  ]);

  grunt.registerTask('test', [
    'mochaTest'
  ]);
};
