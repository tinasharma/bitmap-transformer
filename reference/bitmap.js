var fs = require('fs');
var bitmap = fs.readFileSync('bitmap1.bmp');
var os = require('os');
var endianness = os.endianness();

console.log(bitmap.toString('utf-8',0 , 2));
console.log('size: ' + bitmap['readUInt32' + endianness](2));
console.log('pixel data start: ' + bitmap['readUInt32' + endianness](10));
console.log('bit depth: ' + bitmap['readUInt16' + endianness](28));
console.log('number of colors: ' + bitmap.readUInt32LE(46));

console.log('paletteOffset: ' + bitmap.readUInt32LE(54));
