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
      'karma-story-reporter',
      'karma-json-all-reporter'
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
  config.plugins.push('karma-spec-json-reporter');
  config.reporters.push('specjson');
  config.reporters.push('json-all');

  var courseware = require("angular-cz-courseware");

  // ensure that directory exists
  var testResultsDir = courseware.getTestResultsDir();

  if (!fs.existsSync(testResultsDir)) {
    fs.mkdirSync(testResultsDir);
    console.log('Directory for test results has been created: ' + testResultsDir);
  }

  // get filename for exercise
  var exerciseName = courseware.determineExerciseName(config);
  var outPath = courseware.getTestResultsFilename(exerciseName);

  config.specjsonReporter = {
    outputFile: outPath
  };

  config.jsonAllReporter= {
    outputFile: outPath + '-all', // results will be saved as json-all-results.json
  };

};
