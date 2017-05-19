const qs = require('qs');

function decode (uri) {
  let qregex = /([a-z]+):\/?\/?([^?]+)(\?([^]+))?/.exec(uri);
  if (!qregex) throw new Error('Invalid URI: ' + uri);

  let type = qregex[1];
  let address = qregex[2];
  let query = qregex[4];
  let options = qs.parse(query);

  if (options.amount) {
    options.amount = Number(options.amount);
    if (!isFinite(options.amount)) throw new Error('Invalid amount');
    if (options.amount < 0) throw new Error('Invalid amount');
  }

  return { type, address, options }
}

function encode (type, address, options) {
  options = options || {};
  let query = qs.stringify(options);

  if (options.amount) {
    if (!isFinite(options.amount)) throw new TypeError('Invalid amount');
    if (options.amount < 0) throw new TypeError('Invalid amount');
  }

  return type + ':' + address + (query ? '?' : '') + query;
}

module.exports = {
  decode: decode,
  encode: encode
};
