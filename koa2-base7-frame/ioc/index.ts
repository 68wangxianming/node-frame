//injectable接口可以被注入 inject接口注入
import {Container,injectable,inject} from 'inversify';
import {interfaces,controller, httpGet} from 'inversify-koa-utils';
import * as Router from 'koa-router';

export {
    Container,
    injectable,
    inject,
    interfaces,
    controller,
    httpGet,
    Router
}
