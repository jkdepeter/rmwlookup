const commonPaths = require('./common-paths');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  mode: 'production',
  entry: {
    app: ['babel-polyfill',`${commonPaths.appEntry}/index.js`],
  },
  output: {
    filename: 'static/[name].[fullhash].js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
              esModule: true,
              modules: {
                mode: 'local',
                exportLocalsConvention: 'camelCaseOnly',
                namedExport: true,
              },
            },
          },
          {
            loader: 'postcss-loader',
          }, 
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name:'[name].[ext]',
          outputPath: 'image/',
          publicPath: 'image/',
        }
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[fullhash].css',
    }),
    
  ],
};

module.exports = config;
