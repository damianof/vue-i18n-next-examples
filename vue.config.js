const path = require('path');

module.exports = {
  devServer: {
      port: 8088
  },
  productionSourceMap: true,
  outputDir: 'dist',
  /* publicPath is used by npm run build to prefix references for script/css files */
  publicPath: './',
  /* chainWebpack/configureWebpack so that npm run build does not produce hashed file names under dist/ folder */
  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'))
    if (config.plugins.has('extract-css')) {
      const extractCSSPlugin = config.plugin('extract-css');
      extractCSSPlugin && extractCSSPlugin.tap(() => [{
        filename: '[name].css',
        chunkFilename: '[name].css'
      }])
    }

    if (process.env.NODE_ENV === 'production') {
      // if we need to make exception for some things that should not go into the dist folder
    }

    if (process.env.NODE_ENV === 'coverage') {
      // // config.devtool('cheap-module-eval-source-map');
      config.module.rule('ts')
        .test(/\.ts$/)
        .use('istanbul-instrumenter-loader')
        .loader('istanbul-instrumenter-loader')
        .before('babel-loader')
        .options({
          esModules: true
        })

      config.module.rule('vue')
        .test(/\.vue$/)
        .use('vue-loader')
        .loader('vue-loader')
        .before('vue-loader')
        .options({
          esModules: true
        })
    }
  },
  configureWebpack: {
    output: {
      filename: '[name].js',
      chunkFilename: '[name].js'
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src')
      }
    }
  }
}
