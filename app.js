var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
var path = require('path');
var root = path.join(__dirname, './public');
var fs = require('fs');
var url = require('url');
var io = require('socket.io')(server);

app.use(function (req, res, next) {
  var file = url.parse(req.url).pathname;
  var mode = 'reload';
  createWatcher(file, mode);
  next();
});

app.use(express.static(root));
var watchers = {};

function createWatcher(file, event) {
  var absolute = path.join(root, file);
  console.log(root);
  console.log(event);
  console.log(watchers);
  if (watchers[absolute]) {
    return;
  }else {
    fs.watchFile(absolute, function (curr, prev) {
      if (curr.mtime !== prev.mtime) {
        console.log(`文件被修改`);
        io.sockets.emit(event, file);
      }
    });
    watchers[absolute] = true;
  }
}

server.listen(8080, function () {
  console.log(`The server is running on port 8080.`);
});