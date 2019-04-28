"use strict";

var _lodash = require("lodash");

var _path = require("path");

let config = {
  "viewDir": (0, _path.join)(__dirname, "..", 'views'),
  "staticDir": (0, _path.join)(__dirname, "..", 'assets')
};

if (process.env.NODE_ENV == "development") {
  const localConfig = {
    port: 3000,
    baseUrl: 'http://localhost:8080/index.php?r='
  };
  config = (0, _lodash.extend)(config, localConfig);
}

if (process.env.NODE_ENV == "production") {
  const prodConfig = {
    port: 80
  };
  config = (0, _lodash.extend)(config, prodConfig);
}

module.exports = config;