var path = require('path');
var fs = require('fs');

module.exports = function(config) {
  config.set({

    frameworks: ['jasmine'],
    files: [],

    exclude: [
      'karma.conf.js'
    ],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-story-reporter'
    ],

    reporters: ['story'],

    storyReporter: {
      showSkipped: true,
      showSkippedSummary: true
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  });

  // reporter which is needed for courseware
  config.plugins.push('karma-json-result-reporter');
  config.reporters.push('json-result');

  var courseware = require("courseware");

  // ensure that directory exists
  var testResultsDir = courseware.getTestResultsDir();

  if (!fs.existsSync(testResultsDir)) {
    fs.mkdirSync(testResultsDir);
    console.log('Directory for test results has been created: ' + testResultsDir);
  }

  // get filename for exercise
  var exerciseName = courseware.determineExerciseName(config);
  var outPath = courseware.getTestResultsFilename(exerciseName);

  config.jsonResultReporter = {
    outputFile: outPath
  };

};
