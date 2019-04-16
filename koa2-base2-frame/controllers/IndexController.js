class IndexController {
    constructor() {
    }

    actionIndex() {
        return async (ctx, next) => {
            const data = '图书管理系统';
            ctx.body = await ctx.render("index", {
                data
            })
        }
    }

    actionAdd() {
        return async (ctx, next) => {
            ctx.body = await ctx.render("add")
        }
    }
}


module.exports = IndexController;
