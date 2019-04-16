const fetch = require('node-fetch');
const config = require('../config');

class SafeRequest {
    constructor(url) {
        this.url = url;
        this.baseUrl = config.baseUrl;
    }

    fetch(options) {
        let $http = fetch(this.baseUrl + url);
        return new Promise((resolve, reject) => {
            let result = {
                code: 0,
                message: '',
                data: []
            };
            $http
                .then(res => {
                    let _json = {};
                    try {
                        _json = res.json();
                    } catch (error) {
                        //发📧 打☎️
                    }
                    return _json;
                })
                .then((json) => {
                    //处理一些和后台的业务逻辑
                    result.data = json;
                    resolve(result);
                })
                .catch((error) => {
                    result.code = 1;
                    result.message = 'node-fetch 通讯异常！';
                    reject(result);
                })
        })
    }
}

module.exports = SafeRequest;
