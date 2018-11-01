1. Setup and create index.html
2. Folders
    Public
    src
3. yarn installation
a.
>brew install yarn
 Check latest version
>yarn --version
 latest version
>brew upgrade yarn

b.
Creating package.json
> yarn init
answer the questions

3.5 run yarn install
> yarn install


4. Adding id and script to index.html
<div id="app"></div>
<script src="/bundle.js"></script>

5. Create file for webpack

https://webpack.js.org/
webpack.config.js

                  const path = require('path');

                  module.exports = {
                    mode: 'development',
                    entry: './src/app.js',
                    output: {
                      path: path.join(__dirname, 'public'),
                      filename: 'bundle.js'
                    },
                    module: {
                      rules: [{
                        loader: 'babel-loader',
                        test: /\.js$/,
                        exclude: /node_modules/
                      }, {
                        test: /\.s?css$/,
                        use: [
                          'style-loader',
                          'css-loader',
                          'sass-loader'
                        ]
                      }]
                    },
                    devtool: 'cheap-module-eval-source-map',
                    devServer: {
                      contentBase: path.join(__dirname, 'public')
                    }
                  };

5.1 npm or yarn
npm install --save-dev webpack@<version>
or
yarn add --save-dev webpack@<vesrion>

5.5  In src folder create app.js file
6. babel

create file .babelrc

7. Installing dependencies.
> yarn install

check for versions and other dependencies
this is a world unto itself.^&*%$^&(@)
# Heaton-Fly-Shop
