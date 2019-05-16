const Index = require('../models/index');
const FormData = require('form-data');
class IndexController {
    constructor() {
    }

    actionIndex() {
        return async (ctx, next) => {
            const index = new Index();
            const result = await index.getData();
            // ctx.body = result.data;
            // const data = '图书管理系统';
            const data = result.data;
            ctx.body = await ctx.render("books/pages/index", {
                data
            })
        }
    }

    actionAdd() {
        return async (ctx, next) => {
            const params = new FormData();
            params.append("Books[name]","测试");
            params.append("Books[author]","数据");
            const index = new Index();
            const result = await index.saveData({
                params
            });
            ctx.body = result;
            // ctx.body = await ctx.render("add")
        }
    }
}


module.exports = IndexController;
