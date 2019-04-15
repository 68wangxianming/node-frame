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
}


module.exports = IndexController;
