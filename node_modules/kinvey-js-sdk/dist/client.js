'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _assign = require('lodash/assign');

var _assign2 = _interopRequireDefault(_assign);

var _isString = require('lodash/isString');

var _isString2 = _interopRequireDefault(_isString);

var _isNumber = require('lodash/isNumber');

var _isNumber2 = _interopRequireDefault(_isNumber);

var _errors = require('./errors');

var _utils = require('./utils');

var _activeUserHelper = require('./entity/src/activeUserHelper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_TIMEOUT = 60000;
var _sharedInstance = null;

var Client = function () {
  function Client() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Client);

    options = (0, _assign2.default)({
      apiHostname: 'https://baas.kinvey.com',
      micHostname: 'https://auth.kinvey.com',
      liveServiceHostname: 'https://kls.kinvey.com',
      defaultTimeout: DEFAULT_TIMEOUT
    }, options);

    if (options.apiHostname && (0, _isString2.default)(options.apiHostname)) {
      var apiHostname = options.apiHostname;

      if (/^https?:\/\//i.test(apiHostname) === false) {
        apiHostname = 'https://' + apiHostname;
      }

      var apiHostnameParsed = _url2.default.parse(apiHostname);

      this.apiProtocol = apiHostnameParsed.protocol;

      this.apiHost = apiHostnameParsed.host;
    }

    if (options.micHostname && (0, _isString2.default)(options.micHostname)) {
      var micHostname = options.micHostname;

      if (/^https?:\/\//i.test(micHostname) === false) {
        micHostname = 'https://' + micHostname;
      }

      var micHostnameParsed = _url2.default.parse(micHostname);

      this.micProtocol = micHostnameParsed.protocol;

      this.micHost = micHostnameParsed.host;
    }

    if (options.liveServiceHostname && (0, _isString2.default)(options.liveServiceHostname)) {
      var liveServiceHostname = options.liveServiceHostname;

      if (/^https?:\/\//i.test(liveServiceHostname) === false) {
        liveServiceHostname = 'https://' + liveServiceHostname;
      }

      var liveServiceHostnameParsed = _url2.default.parse(liveServiceHostname);

      this.liveServiceProtocol = liveServiceHostnameParsed.protocol;

      this.liveServiceHost = liveServiceHostnameParsed.host;
    }

    this.appKey = options.appKey;

    this.appSecret = options.appSecret;

    this.masterSecret = options.masterSecret;

    this.encryptionKey = options.encryptionKey;

    this.appVersion = options.appVersion;

    this.defaultTimeout = (0, _isNumber2.default)(options.defaultTimeout) && options.defaultTimeout >= 0 ? options.defaultTimeout : DEFAULT_TIMEOUT;
  }

  _createClass(Client, [{
    key: 'toPlainObject',
    value: function toPlainObject() {
      return {
        apiHostname: this.apiHostname,
        apiProtocol: this.apiProtocol,
        apiHost: this.apiHost,
        micHostname: this.micHostname,
        micProtocol: this.micProtocol,
        micHost: this.micHost,
        liveServiceHostname: this.liveServiceHostname,
        liveServiceHost: this.liveServiceHost,
        liveServiceProtocol: this.liveServiceProtocol,
        appKey: this.appKey,
        appSecret: this.appSecret,
        masterSecret: this.masterSecret,
        encryptionKey: this.encryptionKey,
        appVersion: this.appVersion
      };
    }
  }, {
    key: 'activeUser',
    get: function get() {
      return _activeUserHelper.ActiveUserHelper.get(this);
    }
  }, {
    key: 'apiHostname',
    get: function get() {
      return _url2.default.format({
        protocol: this.apiProtocol,
        host: this.apiHost
      });
    }
  }, {
    key: 'micHostname',
    get: function get() {
      return _url2.default.format({
        protocol: this.micProtocol,
        host: this.micHost
      });
    }
  }, {
    key: 'liveServiceHostname',
    get: function get() {
      return _url2.default.format({
        protocol: this.liveServiceProtocol,
        host: this.liveServiceHost
      });
    }
  }], [{
    key: 'initialize',
    value: function initialize() {
      throw new _errors.KinveyError('Please use Client.init().');
    }
  }, {
    key: 'init',
    value: function init(options) {
      var client = new Client(options);
      _sharedInstance = client;
      return client;
    }
  }, {
    key: 'sharedInstance',
    value: function sharedInstance() {
      if ((0, _utils.isDefined)(_sharedInstance) === false) {
        throw new _errors.KinveyError('You have not initialized the library. ' + 'Please call Kinvey.init() to initialize the library.');
      }

      return _sharedInstance;
    }
  }]);

  return Client;
}();

exports.default = Client;