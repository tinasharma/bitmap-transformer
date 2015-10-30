'use strict';

exports = module.exports = function(buffer) {
  var start = 54;

  for (var i = 0; i < 256; i += 1) {
    invert(buffer, start);
    start += 4;
  }
  return buffer;
};

// function to invert colors
function invert(buffer, startByte) {
  var rgb = getRGB(buffer, startByte);
  buffer.writeUInt8(255 - rgb.red, startByte);
  buffer.writeUInt8(255 - rgb.blue, startByte + 1);
  buffer.writeUInt8(255 - rgb.green, startByte + 2);
}

// function to retrieve rgb values from buffer
function getRGB (buffer, startByte) {
  var rgb = {
    red: buffer.readUInt8(startByte),
    green: buffer.readUInt8(startByte + 1),
    blue: buffer.readUInt8(startByte + 2)
  };
  return rgb;
}
