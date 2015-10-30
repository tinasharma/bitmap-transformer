'use strict';

var fs = require('fs');
var Bitmap = require(__dirname + '/lib/Bitmap');
var transform = require(__dirname + '/lib/transform');

var srcFile = process.argv[2] || 'bitmap1.bmp';
var destFile = process.argv[3] || 'transformed_' + srcFile;

// Open file using fs and read it into a buffer
var bitmap = fs.readFileSync(srcFile);

// Convert buffer into a Javascript Object
var bitmapObj = new Bitmap(bitmap);

bitmap = transform(bitmap, bitmapObj);

fs.writeFileSync(destFile, bitmap);
// Run a transform on that Javascript Object.
// Turn the transformed object back into a buffer.
// Write that buffer to a new file.
