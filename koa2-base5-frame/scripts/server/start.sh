#!/usr/bin/env bash
#启动node服务
cross-env NODE_ENV=development supervisor ./src/server/app.js
