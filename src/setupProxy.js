const {createProxyMiddleware}= require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/api', createProxyMiddleware({
    target: 'http://geek.itheimg.net/v1_0',
    changeOrigin: true,
    pathRewrite: { '^/api': '' }
  }));
};