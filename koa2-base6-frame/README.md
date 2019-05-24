### 基于koa2-base5-frame继续改造
服务端路由太过麻烦需要各种引用
删掉controllers下 IndexService.js
删除app.js import Controllers from "./controllers"
将models文件夹改名service 文件indexService.js

### 控制反转、依赖注入、面向切面
```javascript
   constructor({indexService}) {
        //AOP 构造函数 + DI 依赖注入
        this.indexService = indexService;
    }
```
#### awilix-koa
https://github.com/jeffijoe/awilix-koa

#### @babel/plugin-proposal-decorators
给gulp配置一下装饰器


