var http = require("http");
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({
  ignorePath: false,
  changeOrigin: true,
  prependPath: false
  });

proxy.on('error', function (err, req, res) {
});

http.createServer(function (req, res) {
  proxy.web(req, res, {target: "https://www.google.com.hk" + req.url});
}).listen(5000);