const webpack = require('webpack')
const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'frontend/src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: '[name].js',
    publicPath: 'http://localhost:8080/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    contentBase: 'public/dist',
  },
}
