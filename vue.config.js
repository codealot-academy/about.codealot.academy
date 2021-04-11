// vue.config.js
module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: 'http://codealot.local:3000'
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/REPO_NAME/'
  : '/'
}
