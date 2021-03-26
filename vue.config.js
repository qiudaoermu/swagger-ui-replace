module.exports = {
  publicPath: '/swagger-replace-tools/',
  devServer: {
    open: true, // 是否自动弹出浏览器页面
    host: 'localhost',
    port: '8080',
    https: false,
    hotOnly: false,
    proxy: {
      '/swagger': {
        target: 'https://xietiansheng.cn:3001', // API服务器的地址(由于此处我nodejs后台用了路由，所以+了api)，正常不加
        ws: true,
        changeOrigin: true
      }
    }
  }
}
