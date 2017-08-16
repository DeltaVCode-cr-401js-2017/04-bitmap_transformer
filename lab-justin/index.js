const fs = require('fs');
const bitMapFile = fs.readFileSync(`assets/palette-bitmap.bmp`);
const constructor = require(`./model/bitmap-constructor.js`);
const colorChangerator = require('./model/color-constructor.js');

exports.bitMapObject = new constructor.Bitmap(bitMapFile);
exports.invertedColor = colorChangerator.invertColor(exports.bitMapObject.imgData);
exports.greyscaleColor = colorChangerator.greyscaleColor(exports.bitMapObject.colorTable);
exports.colorfy = colorChangerator.colorfy(exports.bitMapObject.colorTable);
console.log(exports.invertedColor);
console.log(exports.bitMapObject);
console.log(exports.greyscaleColor);
console.log(exports.colorfy);
