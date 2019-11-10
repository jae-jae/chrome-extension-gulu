const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const resolve = dir => path.join(__dirname, '..', dir || '')

module.exports = {
  entry: {
    content: resolve('app/scripts/content'), 
    background: resolve('app/scripts/background'),
    chromereload: resolve('app/scripts/chromereload'),
  },
  output: {
    path: resolve('dist'),
    publicPath: '/',
    filename: 'scripts/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      '@': resolve('app')
    },
    extensions: ['*', '.js', '.json']
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: resolve('app/'), to: resolve('dist/'), ignore: [ 'scripts/**/*' ]
      }
    ])
  ]
}
