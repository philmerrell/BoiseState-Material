module.exports = {

  build_dir: 'build',
  compile_dir: 'bin',

  app_files: {
    js: [ 'src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js' ],
    //jsunit: [ 'src/**/*.spec.js' ],

    atpl: [ 'src/app/**/*.tpl.html' ],

    html: [ 'src/index.html' ]

  },

  //test_files: {
  //  js: [
  //    'vendor/angular-mocks/angular-mocks.js'
  //  ]
  //},

  bower_components: {
    js: [
      'bower_components/angular/angular.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-aria/angular-aria.js',
      'bower_components/angular-material/angular-material.js'

    ],
    css: [
      'bower_components/angular-material/angular-material.css'
    ],
    assets: [
    ]
  }
};