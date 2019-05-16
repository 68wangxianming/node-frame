"use strict";

const Index = require('../models/index');

const FormData = require('form-data');

const cheerio = require('cheerio');

class IndexController {
  constructor() {}

  actionIndex() {
    return async (ctx, next) => {
      const index = new Index();
      const result = await index.getData(); // ctx.body = result.data;
      // const data = '图书管理系统';

      const data = result.data;
      ctx.body = await ctx.render("books/pages/index", {
        data
      });
    };
  }

  actionAdd() {
    return async (ctx, next) => {
      // const params = new FormData();
      // params.append("Books[name]","测试");
      // params.append("Books[author]","数据");
      // const index = new Index();
      const html = await ctx.render("books/pages/add");

      if (ctx.request.header["x-pjax"]) {
        //这个时候我们就渲染 一段json
        //在多页的站内切页面
        const $ = cheerio.load(html); //后台合成内容

        let _result = ""; // console.log("将SSR合成SPA");

        $(".pjaxcontent").each(function () {
          _result += $(this).html();
        });
        $(".lazyload-js").each(function () {
          _result += `<script src="${$(this).attr("src")}"></script>`;
        });
        ctx.body = _result;
      } else {
        console.log("落地页");
        ctx.body = html;
      } // const result = await index.saveData({
      //     params
      // });
      // ctx.body = result;
      // ctx.body = await ctx.render("add")

    };
  }

}

module.exports = IndexController;