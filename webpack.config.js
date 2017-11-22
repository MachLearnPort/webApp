module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query:{
          presets: ['babel-preset-env']
        }},
      {
        test: /\.json$/,
        loader: 'json-loader',
      }
    ]
  }
};