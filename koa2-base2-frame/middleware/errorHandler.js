const errorHandler = {
    error(app, logger) {
        app.use(async (ctx, next) => {
            try {
                await next();
            } catch (err) {
                //电话 微信 邮件
                logger.error(err);
                ctx.status = 500;
                ctx.body = '😢 服务器出现异常';
            }
        })


        app.use(async (ctx, next) => {
            await next();
            if (404 !== ctx.status) {
                return;
            }
            //404设置成200 防止搜索引擎降低权重
            ctx.status = 404;
            ctx.body = '<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8"></script>'
        })
    }
};

module.exports = errorHandler;
