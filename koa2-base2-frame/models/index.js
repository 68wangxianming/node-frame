/**
 * @fileoverview 实现Index的数据模型
 * @author xianming
 */

const SafeRequest = require('../utils/SafeRequest');

/**
 * Index类 获取数据关于图书数据相关的类
 * @class
 */

class Index {
    /**
     * @constructor
     * @param {string} app KOA2的上下文
     */
    constructor(app) {
    }

    /**
     * 获取后台数据全部图书列表方法
     * @param {*} options 配置项
     * @example
     * return new Promise
     * getData(options)
     */
    getData(options) {
        const safeRequest = new SafeRequest('books/index');
        return safeRequest.fetch({})
    }
}

module.exports = Index;













