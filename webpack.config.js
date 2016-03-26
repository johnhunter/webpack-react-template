var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server',
  './app/components/Main.js'
  ],
  output: {
    filename: 'public/bundle.js'
  },
  devServer: {
    contentBase: './public',
    hot: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    },{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(['css','sass'])
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('public/style.css', {
      allChunks: true
    })
  ]
};

