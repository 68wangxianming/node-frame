"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _awilixKoa = require("awilix-koa");

var _dec, _dec2, _dec3, _dec4, _class, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

let BooksController = (_dec = (0, _awilixKoa.route)('/books'), _dec2 = (0, _awilixKoa.route)('/list'), _dec3 = (0, _awilixKoa.route)('/add'), _dec4 = (0, _awilixKoa.GET)(), _dec(_class = (_class2 = class BooksController {
  constructor({
    indexService
  }) {
    //AOP 构造函数 + DI 依赖注入
    this.indexService = indexService;
  }

  async actionIndex(ctx, next) {
    const data = this.indexService.getData();
    ctx.body = await ctx.render("books/pages/index", {
      data
    });
  }

  async actionAdd(ctx, next) {
    ctx.body = await ctx.render("books/pages/add");
  }

}, (_applyDecoratedDescriptor(_class2.prototype, "actionIndex", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "actionIndex"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "actionAdd", [_dec3, _dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "actionAdd"), _class2.prototype)), _class2)) || _class);
var _default = BooksController;
exports.default = _default;