"use strict";

var _koa = _interopRequireDefault(require("koa"));

var _co = _interopRequireDefault(require("co"));

var _koaSwig = _interopRequireDefault(require("koa-swig"));

var _koaStatic = _interopRequireDefault(require("koa-static"));

var _errorHandler = _interopRequireDefault(require("./middleware/errorHandler"));

var _log4js = _interopRequireDefault(require("log4js"));

var _config = _interopRequireDefault(require("./config"));

var _awilixKoa = require("awilix-koa");

var _awilix = require("awilix");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa.default();
//整个IOC的过程来讲，容器最重要
const container = (0, _awilix.createContainer)(); //要注入的所有类装载到container中

container.loadModules([__dirname + '/services/*.js'], {
  //指定以下当前的注入的函数，是什么形式
  formatName: 'camelCase',
  resolverOptions: {
    lifetime: _awilix.Lifetime.SCOPED
  }
});
app.use((0, _awilixKoa.scopePerRequest)(container));
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

_errorHandler.default.error(app, logger); //自动去装载路由


app.use((0, _awilixKoa.loadControllers)(__dirname + '/controllers/*.js'));
app.listen(_config.default.port, () => {
  console.log('Server Start 🐶！');
});