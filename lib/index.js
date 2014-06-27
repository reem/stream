var stream = require('stream');
var util = require('util');
var events = require('events');

/*
 * Convert an ES-6 generator to a node Stream
 */
function Streamer(generator, args, context) {
  stream.Duplex.call(this);
  this._generator = generator.apply(context || null, args);
}

util.inherits(Streamer, stream.Duplex);

Streamer.prototype._read = function (size) {

};

Streamer.prototype._write = function (size) {

};

Streamer.readable = function (generator) {

};

Streamer.writable = function (generator) {

};

exports = module.exports = Streamer;

