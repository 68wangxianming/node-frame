'use strict';

var lodash = require('lodash');
var path = require('path');

let config = {
    "viewDir": path.join(__dirname, "..", 'views'),
    "staticDir": path.join(__dirname, "..", 'assets')
};

{
    const prodConfig = {
        port: 80
    };
    config = lodash.extend(config, prodConfig);
}

module.exports = config;
