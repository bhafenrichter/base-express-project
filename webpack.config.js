const path = require('path');

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
  }
}