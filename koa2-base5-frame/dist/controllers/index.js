"use strict";

const Router = require('koa-router');

const router = new Router();

const IndexController = require('./IndexController');

const indexController = new IndexController();

module.exports = app => {
  router.get('/', indexController.actionIndex());
  router.get('/add', indexController.actionAdd());
  app.use(router.routes()).use(router.allowedMethods());
};