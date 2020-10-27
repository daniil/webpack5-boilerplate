const path = require('path')

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
  
}