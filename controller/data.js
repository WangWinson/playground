'use strict';

var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();

router.get('/atop', function (req, res) {
    // var data = fs.readFileSync(path.resolve('../data/atop'));
    res.send('hello world');
});

module.exports = {
    router: router
}
