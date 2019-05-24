import {route, GET} from 'awilix-koa';

@route('/books')
class BooksController {
    constructor({indexService}) {
        //AOP 构造函数 + DI 依赖注入
        this.indexService = indexService;
    }

    @route('/list')
    async actionIndex(ctx, next) {
        const data = this.indexService.getData();
        ctx.body = await ctx.render("books/pages/index", {
            data
        })
    }

    @route('/add')
    @GET()
    async actionAdd(ctx, next) {
        ctx.body = await ctx.render("books/pages/add")
    }
}


export default BooksController;
