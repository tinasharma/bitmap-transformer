'use strict';

var fs = require('fs');
var transform = require(__dirname + '/lib/transform');

var srcFile = process.argv[2] || 'bitmap1.bmp';
var destFile = process.argv[3] || 'transformed_' + srcFile;

function app() {
  fs.readFile(srcFile, function(err, data) {
    if (err) throw err;

    if (data.toString('utf-8', 0, 2) !== 'BM')
      throw new Error('Not a BM file!');

    var transformed = transform(data);

    fs.writeFile(destFile, transformed, function(err) {
      if (err) throw err;
    });
  });
}

app();
