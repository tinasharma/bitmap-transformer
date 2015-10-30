'use strict';

// setting var to determine os endianness
var os = require('os');
var endianness = os.endianness();

var handle = exports = module.exports = {};

// handle offset: this is where the palette begins
handle.paletteOffset = 54;
