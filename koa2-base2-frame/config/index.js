const _ = require("lodash");
const {join} = require('path');
let config = {
    "viewDir": join(__dirname, "..", 'views'),
    "staticDir": join(__dirname, "..", 'assets')
};
if (process.env.NODE_ENV == "development") {
    const localConfig = {
        port: 3000
    }
    config = _.extend(config, localConfig);
}

if (process.env.NODE_ENV == "production") {
    const prodConfig = {
        port: 80
    }
    config = _.extend(config, prodConfig);
}
module.exports = config;
