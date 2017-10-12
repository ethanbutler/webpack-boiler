const webpack = require('webpack')

const config = {
  context: `${__dirname}/js`,
  entry: {
    app: './index.js'
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [
            'babel-preset-env'
          ].map((preset) => require(preset))
        }
      }
    ]
  },
  devServer: {
    contentBase: `${__dirname}/src`
  },
  devtool: (process.env.NODE_ENV === 'production') ? 'source-map' : 'eval-source-map'
}

module.exports = config
