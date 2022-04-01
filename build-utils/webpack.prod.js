const commonPaths = require('./common-paths');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');
const { any } = require('prop-types');

const port = process.env.PORT || any;
const host = 'localhost' || any;
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
            test: /\.css$/,
            use: [
              {
                loader: 'style-loader',
                options: {
                  esModule: true,
                },
              },
              {
                loader: 'css-loader',
                options: {
                  esModule: true,
                  modules: {
                    mode: 'local',
                    exportLocalsConvention: 'camelCaseOnly',
                    namedExport: true,
                  },
                },
              },
            ],
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
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[fullhash].css',
    }),
    new Serve({
      historyFallback: true,
      liveReload: false,
      hmr: true,
      host: host,
      port: port,
      open: true,
      static: commonPaths.outputPath,
    }),
    
  ],
};

module.exports = config;
