'use strict';

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

    it('should create a readable stream', function () {
      let count = new Streamer(function*() {
        let i = 0;
        while (true) {
          yield i++;
        }
      });

      for (let i = 0; i < 10; i++) {
        demand(count.read()).to.equal(i);
      }
    });
  });
});
