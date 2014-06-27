var Streamer = require('../lib');
var stream = require('stream');
var demand = require('must');

describe('Streamer', function () {
  it('should exist', function () {
    demand(Streamer).to.exist();
  });

  describe('when given a generator', function () {
    it('should create a stream', function () {
      demand(new Streamer(function*() { yield undefined; })).instanceof(stream.Duplex);
    });
  });
});
