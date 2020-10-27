const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {

  // Defining an entry point, what file webpack will look at to compile
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },

  // Where to output bundled file, the [name] in the output will be "main" as specified in the entry object
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },

  plugins: [

    // Will add a bundle script file to template file, resolve any variables and output the index.html in dist folder
    new HtmlWebpackPlugin({
      title: 'Webpack 5 Boilerplate',
      template: path.resolve(__dirname, './src/template.html'), // template file
      filename: 'index.html', // output file
    }),
    
    // Will clear out anything in dist folder after each build
    new CleanWebpackPlugin(),

  ],

  module: {
    rules: [
      // JavaScript (transpile files using Babel with ES2015+ config + .babelrc custom config)
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },

      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },

      // Fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },

      // CSS, PostCSS, and Sass
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },

}