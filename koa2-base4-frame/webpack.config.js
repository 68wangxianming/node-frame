const argv = require("yargs-parser")(process.argv.slice(2));
const _mode = argv.mode || 'development';
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const merge = require('webpack-merge');
const glob = require('glob');
const files = glob.sync('./src/web/views/**/*.entry.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { join } = require('path');
let _plugins = [];
let _entry = {};
for(let item of files){
    if(/.+\/([a-zA-Z]+-[a-zA-Z]+)(\.entry\.js)$/g.test(item) == true){
        const entryKey = RegExp.$1;
        // console.log("🍌🍌🍌", item);
        let [dist, template] = entryKey.split('-');
        _plugins.push(
            new HtmlWebpackPlugin({
                filename: `../views/${dist}/pages/${template}.html`,
                template: `src/web/views/${dist}/pages/${template}.html`,
                inject: false
            })
        );
        _entry[entryKey] = item;
    }
}
console.log(_mergeConfig)
let webpackConfig = {
    entry: _entry,
    output: {
        path: join(__dirname, './dist/assets'),
        filename: 'scripts/[name].bundle.js'
    },
    plugins: [
        ..._plugins
    ]
}
module.exports = merge(webpackConfig, _mergeConfig)
