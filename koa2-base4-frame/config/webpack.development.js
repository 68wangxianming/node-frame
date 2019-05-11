const CopyPlugin = require('copy-webpack-plugin');
const {join} = require('path');

module.exports = {
    plugins: [
        new CopyPlugin([{
                from: join(__dirname, "../", "/src/web/components"),
                to: "../components"

            }],
            {
                ignore: ['*.js', "*.css", ".DS_Store"],
                copyUnmodified: true
            })]
};

