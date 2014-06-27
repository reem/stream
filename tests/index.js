var streamer = require('../lib');
var demand = require('must');

describe('streamer', function () {
  it('should exist', function () {
    demand(streamer).to.exist();
  });
});
