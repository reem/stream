var stream = require('stream');
var util = require('util');
var events = require('events');

/*
 * Convert an ES-6 generator to a node Stream
 */
function Streamer(generator, args, context) {
  'use strict';
  stream.Duplex.call(this, {
    objectMode: true
  });
  this._generator = generator.apply(context || null, args);
  this.objectMode = true;
}

util.inherits(Streamer, stream.Duplex);

Streamer.prototype._read = function () {
  'use strict';
    let nextVal = this._generator.next();
    if (!nextVal.done) {
      this.push(nextVal.value);
    }
};

Streamer.prototype._write = function (chunk, encoding, callback) {
  'use strict';

};

Streamer.readable = function (generator) {
  'use strict';

};

Streamer.writable = function (generator) {
  'use strict';

};

exports = module.exports = Streamer;

