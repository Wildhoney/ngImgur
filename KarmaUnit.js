module.exports = function(config) {

    config.set({
        basePath: '',
        frameworks: ['jasmine', 'fixture'],
        files: [
            'example/js/vendor/angular/angular.js',
            'http://sinonjs.org/releases/sinon-1.7.3.js',
            'example/js/vendor/angular-mocks/angular-mocks.js',
            'module/Imgur.js',
            'tests/**/fixtures/*',
            'tests/**/*.Test.js'
        ],
        reporters: ['progress'],
        port: 9876,
        captureTimeout: 0,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Firefox', 'PhantomJS'],
        singleRun: true,
        preprocessors: {
            '**/*.html': ['html2js'],
            '**/*.json': ['html2js']
        }
    });

};