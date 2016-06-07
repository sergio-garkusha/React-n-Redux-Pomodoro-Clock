// run in shell
// NODE_ENV=production /node_modules/.bin/webpack -p --config webpack.config.js

module.exports = {
  // devtool: 'source-map',
  entry: [
    './app/core.js'
  ],

  output: {
    path: './assets/js',
    filename: 'bundle.js'
  },

  devServer: {
    inline: true,
    port: 3000
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
