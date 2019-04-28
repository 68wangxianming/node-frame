const argv = require('yargs-parser')(process.argv.slice(2));//将[ '--mode', 'development' ]变成对象
const _model = argv.mode || 'development';
const _merageConfig = require(`./config/webpack.${_model}.js`);
const merge = require('webpack-merge');
const glob = require('glob');
const file = glob.sync('./src/web/views/**/*.js');
let _entry = {};

//./src/web/views/books/books-add.entry.js
//./src/web/views/books/books-index.entry.js
console.log(file, '🏀');
for (let item of file) {
    if (/.+\/([a-zA-Z]+-[a-zA-Z]+)(\.entry\.js$)/g.test(item) == true) {
        const entryKey = RegExp.$1;
        console.log('entryKey', entryKey.split('-'));
    }
    console.log(item);
}

let webpackConfig = {
    entry: _entry,
};

module.exports = merge(webpackConfig);
