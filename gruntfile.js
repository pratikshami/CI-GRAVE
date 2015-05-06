module.exports = function(grunt) {

  grunt.initConfig({

      
      jshint: {
      files: ['./lib/hello.js','./lib/index.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
	
      
    uglify: {
      options: {
      mangle: false
        },
        
    my_target: {
      files: {
        'dest/output.min.js': ['./lib/hello.js','./lib/index.js']
      }
    }
  },

      /*env: {
      coverage: {
        APP_DIR_FOR_CODE_COVERAGE: '../test/coverage/instrument/app/'
      }
    },*/
      
      instrument: {
      files: 'lib/*.js',
      options: {
        lazy: true,
        basePath: 'test/coverage/instrument/'
      }
    },
      
  simplemocha: {
      options: {
          globals: ['chai'],
          timeout: 3000,
          ignoreLeaks: false,
          reporter: 'mochawesome'
    },
    all: { src: ['test/*-test.js'] }
  },
      
    /*storeCoverage: {
      options: {
        dir: 'test/coverage/reports'
      }
    },*/
/*    makeReport: {
      src: 'test/coverage/reports/**//**.json',
      options: {
        type: 'lcov',
        dir: 'test/coverage/reports',
        print: 'detail'
      }
    },*/
      
      
    
      plato: {
  your_task: {
    options : {
      jshint : grunt.file.readJSON('./node_modules/grunt-plato/.jshintrc')
     // simplemocha: grunt.file.readJSON('./node_modules/grunt-plato/test/plato_test.js')
    },
    files: {
      'reports': ['./lib/hello.js','./lib/index.js']
    }
  }
},
jasmine_node: {
        options: {
      forceExit: true,  
      match: '.',
      matchall: false,
      extensions: 'js',
      specNameMatcher: 'spec'
	 
    },
   //all1: ['spec/'],
	report: {
    type: 'html',
    options: {
        dir: 'bin/aaaaa/html'
    }
}
  }
                   


 
      
});
// grunt.registerTask('coverage', ['instrument', 'simplemocha', /*'storeCoverage',*/ 'makeReport']);

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-plato');
    grunt.loadNpmTasks('grunt-istanbul');
	grunt.loadNpmTasks('grunt-jasmine-node');
//  grunt.loadNpmTasks('grunt-mocha');


  grunt.registerTask('default', ['jshint','uglify','simplemocha','plato'/*,'makeReport'*/])
     grunt.registerTask('test', [ 'jasmine_node']);

};
