'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RequestMethod = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _es6Promise = require('es6-promise');

var _es6Promise2 = _interopRequireDefault(_es6Promise);

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _assign = require('lodash/assign');

var _assign2 = _interopRequireDefault(_assign);

var _isString = require('lodash/isString');

var _isString2 = _interopRequireDefault(_isString);

var _isNumber = require('lodash/isNumber');

var _isNumber2 = _interopRequireDefault(_isNumber);

var _client = require('../../client');

var _client2 = _interopRequireDefault(_client);

var _errors = require('../../errors');

var _utils = require('../../utils');

var _response = require('./response');

var _response2 = _interopRequireDefault(_response);

var _headers = require('./headers');

var _headers2 = _interopRequireDefault(_headers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RequestMethod = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  PUT: 'PUT',
  DELETE: 'DELETE'
};
Object.freeze(RequestMethod);
exports.RequestMethod = RequestMethod;

var Request = function () {
  function Request() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Request);

    options = (0, _assign2.default)({
      followRedirect: true
    }, options);

    this.client = options.client;
    this.method = options.method || RequestMethod.GET;
    this.headers = options.headers || new _headers2.default();
    this.url = options.url || '';
    this.body = options.body || options.data;
    this.timeout = (0, _utils.isDefined)(options.timeout) ? options.timeout : this.client.defaultTimeout;
    this.followRedirect = options.followRedirect === true;
    this.cache = options.cache === true;
  }

  _createClass(Request, [{
    key: 'execute',
    value: function execute() {
      if ((0, _utils.isDefined)(this.rack) === false) {
        return _es6Promise2.default.reject(new _errors.KinveyError('Unable to execute the request. Please provide a rack to execute the request.'));
      }

      return this.rack.execute(this.toPlainObject()).then(function (response) {
        if ((0, _utils.isDefined)(response) === false) {
          throw new _errors.NoResponseError();
        }

        if (response instanceof _response2.default === false) {
          response = new _response2.default({
            statusCode: response.statusCode,
            headers: response.headers,
            data: response.data
          });
        }

        return response;
      });
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      return this.rack.cancel();
    }
  }, {
    key: 'toPlainObject',
    value: function toPlainObject() {
      return {
        method: this.method,
        headers: this.headers.toPlainObject(),
        url: this.url,
        body: this.body,
        timeout: this.timeout,
        followRedirect: this.followRedirect
      };
    }
  }, {
    key: 'client',
    get: function get() {
      return this._client || _client2.default.sharedInstance();
    },
    set: function set(client) {
      if (client) {
        if (client instanceof _client2.default === false) {
          throw new _errors.KinveyError('client must be an instance of the Client class.');
        }
      }

      this._client = client;
    }
  }, {
    key: 'method',
    get: function get() {
      return this._method;
    },
    set: function set(method) {
      if (!(0, _isString2.default)(method)) {
        method = String(method);
      }

      method = method.toUpperCase();
      switch (method) {
        case RequestMethod.GET:
        case RequestMethod.POST:
        case RequestMethod.PATCH:
        case RequestMethod.PUT:
        case RequestMethod.DELETE:
          this._method = method;
          break;
        default:
          throw new _errors.KinveyError('Invalid request method. Only GET, POST, PATCH, PUT, and DELETE are allowed.');
      }
    }
  }, {
    key: 'headers',
    get: function get() {
      return this._headers;
    },
    set: function set(headers) {
      if (!(headers instanceof _headers2.default)) {
        headers = new _headers2.default(headers);
      }

      this._headers = headers;
    }
  }, {
    key: 'url',
    get: function get() {
      if (this.cache === true) {
        return (0, _utils.appendQuery)(this._url, _qs2.default.stringify({
          _: Math.random().toString(36).substr(2)
        }));
      }

      return this._url;
    },
    set: function set(urlString) {
      this._url = urlString;
    }
  }, {
    key: 'data',
    get: function get() {
      return this.body;
    },
    set: function set(data) {
      this.body = data;
    }
  }, {
    key: 'timeout',
    get: function get() {
      return this._timeout;
    },
    set: function set(timeout) {
      timeout = parseInt(timeout, 10);

      if ((0, _isNumber2.default)(timeout) === false || isNaN(timeout)) {
        throw new _errors.KinveyError('Invalid timeout. Timeout must be a number.');
      }

      this._timeout = timeout;
    }
  }, {
    key: 'followRedirect',
    get: function get() {
      return this._followRedirect;
    },
    set: function set(followRedirect) {
      this._followRedirect = !!followRedirect;
    }
  }, {
    key: 'cache',
    get: function get() {
      return this._cache;
    },
    set: function set(cache) {
      this._cache = !!cache;
    }
  }]);

  return Request;
}();

exports.default = Request;