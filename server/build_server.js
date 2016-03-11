'use strict';

var express = require('express');
var serveIndex = require('serve-index');
var app = express();
var path = require('path');
var dataRouter = require('../controller/data.js').router;
// var http = require('http');

app.use(function (req, res, next) {
  console.log('---------------------------------------------');
  console.log(req.ip);
  console.log(req.path);
  next();
});

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

var publicPath = path.resolve('../samples');

app.use(express.static(publicPath));
app.use(serveIndex(publicPath, {'icon': true}));

app.use('/data', dataRouter);

// http.createServer(app).listen(9080,'0.0.0.0');
app.listen(9999, function () {
    console.log('server is running at http://localhost:9999');

    if (process.send) {
        process.send('online');
    }
});
