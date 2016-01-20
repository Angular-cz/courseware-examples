var baseConfig = require('../base-karma.conf.js');

module.exports = function(config) {
  baseConfig(config);

  config.files.push('*.js');
};

