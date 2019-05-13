### package.json
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

### shell文件
**scripty**
npm install --save-dev scripty
"server:start": "scripty",
"server:dev": "scripty",
"server:prod": "scripty",
"server:hint": "scripty",
"client:dev": "scripty",


npm run server:start

**easy shell**
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

### 前后端配置
gulp 小任务+简单
rollup 适合前端的库 react vue
webpack 打包工具 bundle

### 配置web端
#### webpack配置

### 配置server端
#### gulp流清洗
将app.js和config换成import





