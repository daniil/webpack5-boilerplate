const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
    
  ],

}