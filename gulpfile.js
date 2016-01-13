var gulp = require('gulp');
var connect = require('connect');
var serveStatic = require('serve-static');
var courseware = require('angular-cz-courseware');

var config = {
  httpServer: {
    host: 'localhost',
    port: 8000
  }
};
gulp.task('connect', ['initialize-tests'], function(cb) {

  console.log("Http-server running on http://localhost:" + config.httpServer.port);

  var app = connect();

  app.use(serveStatic('./'));

  var server = app.listen(config.httpServer.port);

  // connect test results visualization socket server
  courseware.socketServer(server);
  cb();
});

// initialize tests results json files
gulp.task('initialize-tests', function(cb) {
  var currentKarmaServer = require("karma").Server;
  courseware.initializeTestResults(currentKarmaServer, cb);
});

gulp.task('default', ['connect']);