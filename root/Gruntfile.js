module.exports = function (grunt) {

  grunt.initConfig({

    requirejs: {
      compile: {
        options: {
          baseUrl: "app/scripts/app",
          mainConfigFile: "app/scripts/main.js",
          name: "main",
          paths: {
            "main": "../main"
          },
          out: "app/build/main.build.js",
          include: ["../lib/requirejs/require"]
        }
      }
    },

    less: {
      all: {
        files: {
          'app/styles/style.css': 'app/less/root.less'
        }
      }
    },

    connect: {
      all: {
        options: {
          port: 3000,
          hostname: '0.0.0.0',
          keepalive: true,
          base: 'app',
          livereload: true
        }
      }
    },

    watch: {
      all: {
        files: ['**/*', '!build/*', '!less/*'],
        options: {
          cwd: 'app',
          livereload: true
        }
      },

      less: {
        files: ['**/*.less'],
        tasks: ['less']
      }
    },

    concurrent: {
      server: ['connect', 'watch:all', 'watch:less']
    }
  });

  grunt.loadNpmTasks("grunt-contrib-requirejs");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-concurrent");
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('build', ['requirejs:compile']);
  grunt.registerTask('server', ['concurrent:server']);
};