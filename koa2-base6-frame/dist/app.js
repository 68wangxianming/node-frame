"use strict";

var _koa = _interopRequireDefault(require("koa"));

var _co = _interopRequireDefault(require("co"));

var _koaSwig = _interopRequireDefault(require("koa-swig"));

var _koaStatic = _interopRequireDefault(require("koa-static"));

var _errorHandler = _interopRequireDefault(require("./middleware/errorHandler"));

var _log4js = _interopRequireDefault(require("log4js"));

var _config = _interopRequireDefault(require("./config"));

var _controllers = _interopRequireDefault(require("./controllers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa.default();
app.use((0, _koaStatic.default)(_config.default.staticDir));
app.context.render = _co.default.wrap((0, _koaSwig.default)({
  root: _config.default.viewDir,
  autoescape: true,
  // ssr渲染性能的瓶颈 'memory'
  cache: false,
  ext: 'html',
  varControls: ["[[", "]]"],
  writeBody: false
}));

_log4js.default.configure({
  appenders: {
    cheese: {
      type: 'file',
      filename: 'logs/cheese.log'
    }
  },
  categories: {
    default: {
      appenders: ['cheese'],
      level: 'error'
    }
  }
});

const logger = _log4js.default.getLogger('cheese');

_errorHandler.default.error(app, logger);

(0, _controllers.default)(app);
app.listen(_config.default.port, () => {
  console.log('Server Start 🐶！');
});