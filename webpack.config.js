module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};
