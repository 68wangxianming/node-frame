import Koa from "koa";
const app = new Koa();
import co from "co";
import render from 'koa-swig';
import serve from 'koa-static';
import errorHandler from "./middleware/errorHandler";
import log4js from 'log4js';
import config from "./config"
import Controllers from "./controllers"

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
    appenders: { cheese: { type: 'file', filename: 'logs/cheese.log' } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});

const logger = log4js.getLogger('cheese');
errorHandler.error(app, logger);

Controllers(app);
app.listen(config.port, () => {
    console.log('Server Start 🐶！');
});
