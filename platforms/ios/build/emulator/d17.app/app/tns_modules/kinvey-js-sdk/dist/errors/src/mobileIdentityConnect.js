'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MobileIdentityConnectError(message, debug, code, kinveyRequestId) {
  this.name = 'MobileIdentityConnectError';
  this.message = message || 'An error has occurred with Mobile Identity Connect.';
  this.debug = debug || undefined;
  this.code = code || undefined;
  this.kinveyRequestId = kinveyRequestId || undefined;
  this.stack = new Error().stack;
}
MobileIdentityConnectError.prototype = Object.create(_base2.default.prototype);
MobileIdentityConnectError.prototype.constructor = MobileIdentityConnectError;
exports.default = MobileIdentityConnectError;