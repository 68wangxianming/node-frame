import {route, GET} from 'awilix-koa';

@route('/')
class IndexController {
    @route('/')
    @GET()
    async actionAdd(ctx, next) {
        ctx.body = '这是首页！'
    }
}

export default IndexController;
