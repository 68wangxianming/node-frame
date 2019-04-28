const argv = require('yargs-parser')(process.argv.slice(2));//将[ '--mode', 'development' ]变成对象
const _model = argv.mode || 'development';
const _merageConfig = require(`./config/webpack.${_model}.js`);
console.log(argv.mode,'📷');
