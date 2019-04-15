const Router = require('koa-router');
const router = new Router();
const IndexController = require('./IndexController');
const indexController = new IndexController();

module.exports = (app) => {
    router.get('/', indexController.actionIndex());
    app.use(router.routes()).use(router.allowedMethods());
};
