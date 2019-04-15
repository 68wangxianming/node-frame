class IndexController {
    constructor() {
    }

    actionIndex() {
        return (ctx, next) => {
            ctx.body = 'Hello world!';
        }
    }
}


module.exports = IndexController;
