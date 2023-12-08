const path = require('path');
const webpack = require('webpack');
 
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: "development",
  
  entry:{bundle: path.resolve(__dirname,'src/index.js')},

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: `Patrick's Portfolio`,
      filename: 'index.html',
			template: 'src/template.html'
    }),
   
  ],
  output: {
		filename: '[name].js',
		path: path.resolve(__dirname,'dist'),
		clean:true,  
	},
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader',
              'css-loader',
              'sass-loader'
            ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
}; 