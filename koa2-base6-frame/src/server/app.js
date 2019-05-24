import Koa from "koa";

const app = new Koa();
import co from "co";
import render from 'koa-swig';
import serve from 'koa-static';
import errorHandler from "./middleware/errorHandler";
import log4js from 'log4js';
import config from "./config"
import {loadControllers,scopePerRequest} from 'awilix-koa';
import {asClass, asValue, Lifetime, createContainer} from 'awilix';
//整个IOC的过程来讲，容器最重要
const container = createContainer();
//要注入的所有类装载到container中
container.loadModules([__dirname + '/services/*.js'], {
    //指定以下当前的注入的函数，是什么形式
    formatName: 'camelCase',
    resolverOptions: {
        lifetime: Lifetime.SCOPED
    }
});
app.use(scopePerRequest(container));

app.use(serve(config.staticDir));
app.context.render = co.wrap(render({
    root: config.viewDir,
    autoescape: true,
    // ssr渲染性能的瓶颈 'memory'
    cache: false,
    ext: 'html',
    varControls: ["[[", "]]"],
    writeBody: false
}));

log4js.configure({
    appenders: {cheese: {type: 'file', filename: 'logs/cheese.log'}},
    categories: {default: {appenders: ['cheese'], level: 'error'}}
});

const logger = log4js.getLogger('cheese');
errorHandler.error(app, logger);
//自动去装载路由
app.use(loadControllers(__dirname + '/controllers/*.js'));
app.listen(config.port, () => {
    console.log('Server Start 🐶！');
});
