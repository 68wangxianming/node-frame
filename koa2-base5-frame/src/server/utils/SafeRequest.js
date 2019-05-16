//未来将来把浏览器端的代码和后台的代码相互替换或者拷贝
const fetch = require("node-fetch");
const config = require("../config");
class SafeRequest {
    constructor(url) {
        this.url = url;
        this.baseUrl = config.baseUrl;
    }
    fetch(options) {
        //产生一个完整的链接 发起一个promise的结结果
        let ydfetch = fetch(this.baseUrl + this.url);
        if (options) {
            const body = { a: 1 };
            ydfetch = fetch(this.baseUrl + this.url, {
                method: options.method,
                body: options.params,
            });
        }
        return new Promise((resolve, reject) => {
            let result = {
                code: 0,
                message: "",
                data: []
            };
            ydfetch
                .then((res) => {
                    let _json = {};
                    try {
                        _json = res.json()
                    } catch (error) {
                        //发邮件📩
                    }
                    return _json;
                })
                .then((json) => {
                    //你们产线跟后端定了一些api的交互形式
                    result.data = json;
                    resolve(result);
                }).catch((error) => {
                console.log(error);
                result.code = 1;
                result.message = "node-fetch和后端通讯异常❎";
                reject(result);
            })
        })

    }
}
module.exports = SafeRequest;
