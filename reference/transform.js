// Open file using fs and read it into a buffer
var fs = require('fs');
var bitmap = fs. readFileSync('bitmap1.bmp');

var bitmapJSON = bitmap.toJSON();

// Convert buffer into a Javascript Object
// Run a transform on that Javascript Object.
// Turn the transformed object back into a buffer.
// Write that buffer to a new file.

