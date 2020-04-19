module.exports = {
  runtimeCompiler: true,
  publicPath: '/',
  chainWebpack: config => {
    resolve: {
      alias: {
        moment: 'moment/src/moment'
      }
    }
  }
}
