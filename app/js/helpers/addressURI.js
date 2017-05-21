const qs = require('qs');
const { StellarTools } = require('stellar-toolkit');
const WAValidator = require('wallet-address-validator');
const Web3 = require('web3');

const web3 = new Web3();

function isValidAddress(address) {
  return (
    StellarTools.validPk(address) ||
    web3.isAddress(address) ||
    WAValidator.validate(address)
  );
}

function decodeRawAddress(address) {
  let type;

  if(StellarTools.validPk(address)) {
    type = 'stellar';
  }
  else if(web3.isAddress(address)) {
    type = 'ethereum';
  }
  else if(WAValidator.validate(address)) {
    type = 'bitcoin';
  }
  if(!type) {
    throw new Error(`Invalid address: ${address}`);
  }
  return {
    type,
    address,
    options: {},
  };
}

function decode(uri) {
  if(isValidAddress(uri)) {
    return decodeRawAddress(uri);
  }

  const qregex = /([a-z]+):\/?\/?([^?]+)(\?([^]+))?/.exec(uri);
  if (!qregex) throw new Error(`Invalid URI: ${uri}`);

  const type = qregex[1];
  const address = qregex[2];
  const query = qregex[4];
  const options = qs.parse(query);

  if (options.amount) {
    options.amount = Number(options.amount);
    if (!isFinite(options.amount)) throw new Error('Invalid amount');
    if (options.amount < 0) throw new Error('Invalid amount');
  }

  if(!isValidAddress(address)) {
    throw new Error('Invalid address');
  }

  return { type, address, options };
}

function encode(type, address, options) {
  options = options || {};
  const query = qs.stringify(options);

  if (options.amount) {
    if (!isFinite(options.amount)) throw new TypeError('Invalid amount');
    if (options.amount < 0) throw new TypeError('Invalid amount');
  }

  return `${type}:${address}${query ? '?' : ''}${query}`;
}

module.exports = {
  isValidAddress,
  decodeRawAddress,
  decode,
  encode,
};
