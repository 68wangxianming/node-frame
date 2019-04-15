const Koa = require('koa');
const app = new Koa();
require('./controllers/index')(app);

app.listen(3000,()=>{
    console.log('Server Start 🐶！');
});
