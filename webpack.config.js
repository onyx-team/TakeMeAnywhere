module.exports = {
  entry: './client/main.js',
  output: {
    path: '/.client/',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    contentBase: './client',
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }]
  }
}