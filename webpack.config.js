var webpack = require('webpack');

module.exports = {
     entry: './src/app.js',
     output: {
         path: 'public',
         filename: 'js/bundle.js',
     },
     devServer:{
        inline: true,
        contentBase: './public',
        port: 3000
     },
     module: {
         loaders: [{
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['react', 'es2015', 'stage-0'],
                plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
             }
         }]
     },
     plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
 }