const fs = require('fs');
const bitMapFile = fs.readFileSync(`assets/palette-bitmap.bmp`);
const constructor = require(`./model/bitmap-constructor.js`);
const colorChangerator = require('./model/color-constructor.js');

exports.bitMapObject = new constructor.Bitmap(bitMapFile);
exports.invertedColor = colorChangerator.invertColor(exports.bitMapObject.imgData);
console.log(exports.invertedColor);
