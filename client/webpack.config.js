const path=require('path');
module.exports = {
    entry: './entry/index.js',
    output: {
        path: path.resolve(__dirname, '../public/javascripts'),
        filename: 'client.js'
    }
};