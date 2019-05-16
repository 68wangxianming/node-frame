### package.json 的使用

**npm run env**  
LOGNAME 可以拿到用户名

**钩子**    
"pretest": "echo \"🍎🍎🍎🍎🍎🍎🍎$LOGNAME\"",

**自己设置变量**    
"config":{
    "port":3000
}
"pretest": "echo \"🍎🍎🍎$LOGNAME\" && echo \"🍎🍎🍎$npm_package_config_port\"",
"test": "echo \"Error: no test specified\" && exit 1",

exit 0正常退出 1有错退出

**&&串行 和 &并行**    
"test": "echo \"🍌test\" & exit 0",
"dev": "echo \"🍎$LOGNAME\" ",
"client:dev": "npm run test & npm run dev",

**npm-run-all**    
https://www.npmjs.com/package/npm-run-all
"client:dev": "npm-run-all test dev",
"client:dev": "npm-run-all --parallel test dev",

### 配置shell文件    
**scripty**  
npm install --save-dev scripty
"server:start": "scripty",
"server:dev": "scripty",
"server:prod": "scripty",
"server:hint": "scripty",
"client:dev": "scripty",

eg: npm run server:start

**编写easy shell**  
lsof -i :80 | awk '{print $2}'
```
#!/usr/bin/env bash
base_port="80"
check_port=`lsof -i:${base_port} | awk '{print $2}'`
while [ "$check_port"!="" ]
do
  let base_port=base_port+1
  check_port=`lsof -i:${base_port}`
done
echo ${base_port}
```
```
#!/usr/bin/env bash
base_port="80"
check_port=`lsof -i:${base_port} | wc -l`
echo $check_port
while [ $check_port -gt 0 ]
do
  base_port=`expr $base_port + 1`
  check_port=`lsof -i:${base_port} | wc -l`
done
echo ${base_port}
```  
eg: 处理启动时端口占用问题  

### 前后端配置  
gulp 适合node小任务简单
rollup 适合前端的库 react vue
webpack 打包工具 bundle

### 配置web端  
#### webpack配置  

### 配置server端  
#### gulp流清洗  
将app.js和config换成import  

### 启动  
运行basic文件夹php环境提供数据接口  
php yii serve 127.0.0.1:8080  
打包前端  
npm run client:dev  
打包后端  
npm run server:dev  
启动3000端口访问  
npm run server:start   

![Image text](https://github.com/68wangxianming/node-frame/blob/master/source-material/WX20190516-222410%402x.png)

执行两遍books-index.bundle.js并产生报错  























