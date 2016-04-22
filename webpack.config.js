const strip = require('strip-loader');
const DEV = process.env.NODE_ENV==='development';
const webpack = require('webpack');

const wpConfig = {
  entry: './src/',
  output: {
    path: __dirname +'/public',
    filename: 'bundle.js'
  },
  devtool: DEV ? 'cheap-module-source-map' : null,
  devServer: {
    contentBase: "public",
    historyApiFallback: {
      index: '/index.html'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV_MODE: process.env.NODE_ENV
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
    
  }
};

if(!DEV){
  wpConfig.module.loaders.push({
    test: /\.js/,
    exclude: /node_modules/,
    loader: strip.loader('console.log')
  });
}

module.exports = wpConfig;