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

修改webpack.development.js  
output:{  
    publicPath:'/'  
}  
watch:true  
接下来用pjax来处理服务端渲染和客户端渲染的问题  

```javascript  
<script src="https://cdn.staticfile.org/jquery.pjax/2.0.1/jquery.pjax.js"></script>  
<script src="https://cdn.staticfile.org/quicklink/1.0.0/quicklink.js"></script>  
<script>  
    $(document).pjax("a", "#app");  
</script>  
```  
使用pjax对页面a进行绑定

node服务端渲染controllers中   
```javascript
if (ctx.request.header["x-pjax"]) {
    //这个时候我们就渲染一个json
    //在多页的站内切页面
    console.log('将ssr合成spa');
}else {
    //请求落地页面
    console.log('落地页直接刷新');
}
```  
add.html注册一个Web Components组件     
http://x-tag.github.io/  
```javascript
<div class="components-add pjaxcontent">
    <x-add></x-add>
</div>
```  
```javascript
<div class="components-add pjaxcontent">
    <x-add></x-add>
</div>

// import "./add.css";
const add = {
    init() {
        console.log("🍎init");
        xtag.create("x-add", class extends XTagElement {
            constructor() {
                super();
            }
            '::template(true)'() {
                return `<form>
                <div class="form-group">
                  <label for="exampleInputPassword1">书名</label>
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder="请输入书名">
                </div>
                <div class="form-group">
                  <label for="exampleInputFile">作者</label>
                  <input class="form-control" type="text" id="exampleInputFile" placeholder="请输入作者">
                </div>
                <button  id="add-btn" class="btn btn-default">提交</button>
              </form>`
            }
            'click::event'(e) {
                if (e.target.id == "add-btn") {
                    alert("请求添加新闻")
                }
            }
        });

    }
}
export default add;
```  
修改node服务端渲染controllers中   
```javascript
const html = await ctx.render("books/pages/add");
if (ctx.request.header["x-pjax"]) {
    //这个时候我们就渲染 一段json
    //在多页的站内切页面
    const $ = cheerio.load(html);
    //后台合成内容
    let _result = "";
    // console.log("将SSR合成SPA");
    $(".pjaxcontent").each(function () {
        _result += $(this).html();
    });
    $(".lazyload-js").each(function () {
        _result += `<script src="${$(this).attr("src")}"></script>`;
    });
    ctx.body = _result;
} else {
    console.log("落地页");
    ctx.body = html;
}
```   

修改webpack插件HtmlAfterWebpackPlugin   
```javascript
//静态资源处理小函数
const assetsHelp = (data) => {
    let js = [];
    let css = [];

    const dir = {
        js: item => `<script class="lazyload-js" src="${item}"></script>`,
        css: item => `<link class="lazyload-css" rel="stylesheet" href="${item}">`
    };

    for (let jsitem of data.js) {
        js.push(dir.js(jsitem))
    }

    for (let cssitem of data.css) {
        css.push(dir.css(cssitem))
    }

    return {
        js, css
    }
}
```   

再将<script src="/scripts/runtime.bundle.js"></script><script src="/scripts/books-add.bundle.js"></script>    
存入localstorage点击切换spa页面时，页面几乎不请求数据   


























