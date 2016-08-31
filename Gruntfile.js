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
    }
  });

  /////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////

  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('test', [
    'mochaTest'
  ]);
};
