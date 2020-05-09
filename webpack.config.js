const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: "./src/client/js/index.js",                                    // what is the entrypoint (starting) for webpack we should compile
  output: {
    filename: "index.min.js",                                           // what do you want to call the outputed file
                                                                        // use CONTENTHASH to make sure the browser doesn't cache the file
    path: path.resolve(__dirname, "dist"),                              // will send the compiled code to the folder
  },
  module: {
    rules: [
    ]
  },
  plugins: [  
    new CopyPlugin([                                                    // copies the images into the dist folder
      {
          from: path.resolve(__dirname, "src/client/img"), 
          to: path.resolve(__dirname, "dist/img"), 
      }
    ]),
    new CompressionPlugin({                                             // compresses all of the js files via gzip
      test: /\.js(\?.*)?$/i,
      algorithm: "gzip",
    })
  ]
}