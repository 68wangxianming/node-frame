import {InversifyKoaServer} from 'inversify-koa-utils';
import 'reflect-metadata';
import {Container} from './ioc';
import './ioc/loader';

//基本的容器
const container = new Container();

let server = new InversifyKoaServer(container);

//启动容器
let app = server.build();
app.listen(3000, () => {
    // console.log('启动成功');
})
