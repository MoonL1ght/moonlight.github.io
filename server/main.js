const path = require('path'),
      http = require('http'),
      express = require('express'),
      baseConfig = require('../webpack/webpack.config.js'),
      serverConfig = require('./server.config.js')

const app = express(),
      DIST_DIR = baseConfig.output.path,
      HTML_FILE= path.join(DIST_DIR, 'index.html'),
      PORT = serverConfig.PORT,
      MODE = process.env.NODE_ENV,
      isDevelopment = MODE == 'development'

if (isDevelopment) {
  const webpack = require('webpack'),
        config = require('../webpack/webpack.dev.config.js'),
        webpackDevMiddleware = require('webpack-dev-middleware'),
        webpackHotMiddleware = require('webpack-hot-middleware'),
        compiler = webpack(config)
  app.use(webpackDevMiddleware(compiler, {publicPath: config.output.publicPath,
    historyApiFallback: true}))
  app.use(webpackHotMiddleware(compiler))
  app.get(/.*/, (req, res) => {
    res.sendFile(HTML_FILE)
  })
} else {
  console.log('Hot reload server can only run in DEV mode!')
  process.exit(1);
}

const server = http.createServer(app)

app.set('port', PORT)
server.listen(PORT, (error) => {
  if (error) {
    console.log(error)
  }
  console.log(`Server is runing in ${MODE} mode, port: ${PORT}`)
})