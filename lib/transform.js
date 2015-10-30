'use strict';

exports = module.exports = function(buffer, bitmapObj) {
  for (var i = 0; i < bitmapObj.paletteLength; i += 1) {
    invert(buffer, bitmapObj.paletteOffset);
    bitmapObj.paletteOffset += 4;
  }
  return buffer;
};

function invert(buffer, startByte) {
  var rgb = rgbReader(buffer, startByte);
  buffer.writeUInt8(255 - rgb[0], startByte);
  buffer.writeUInt8(255 - rgb[1], startByte + 1);
  buffer.writeUInt8(255 - rgb[2], startByte + 2);
}

function rgbReader(buffer, startByte) {
  return [
    buffer.readUInt8(startByte),
    buffer.readUInt8(startByte + 1),
    buffer.readUInt8(startByte + 2)
  ];
}
