const Koa = require("koa");
const app = new Koa();
const co = require("co");
const render = require('koa-swig');
const serve = require('koa-static');
const errorHandler = require("./middleware/errorHandler");
const log4js = require('log4js');
const config = require("./config")

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

require('./controllers')(app);
app.listen(config.port, () => {
    console.log('Server Start 🐶！');
});
