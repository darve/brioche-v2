module.exports = function(config){
    config.set({

    files : [
      'app/assets/vendor/js/angular/angular.js',
      'app/assets/scripts/**/*.js',
      'test/unit/**/*.js'
    ],

    exclude : ['app/assets/scripts/prod/**/*.js'],
    autoWatch : true,
    frameworks: ['jasmine'],
    browsers : ['PhantomJS', 'Chrome'],
    logLevel: config.LOG_DEBUG,

    plugins : [
        'karma-phantomjs-launcher',
        'karma-chrome-launcher',
        'karma-jasmine',
        'karma-htmlfile-reporter'
    ]
})}