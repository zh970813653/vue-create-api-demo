module.exports = {
  devServer: {
    port: 8080,
    host: 'localhost',
    open: true
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8080',
    //     changeOrigin: true
    //     // pathRewrite: {
    //     //   '^/api': '/public/mock'
    //     // }
    //   }
    // }
  }
}
