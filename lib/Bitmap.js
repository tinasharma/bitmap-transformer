'use strict'

// requiring os for later use with dual-endianness
var os = require('os');
var endianness = os.endianness();

var Bitmap = exports = module.exports = function(bitmap) {
  this.bitMapType = bitmap.toString('utf-8', 0, 2);
  this.fileSize = bitmap['readUInt32' + endianness](2);
  this.pixelStart = bitmap['readUInt32' + endianness](10);
  this.bitDepth = bitmap['readUInt16' + endianness](28);
  this.paletteLength = bitmap['readUInt32' + endianness](46);

  if (this.bitMapType !== 'BM')
    throw new Error('Not a BM file!');

  this.paletteOffset = 54;
};
