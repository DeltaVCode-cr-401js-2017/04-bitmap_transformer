const fs = require('fs');
const bitMapFile = fs.readFileSync(`assets/palette-bitmap.bmp`);
const constructor = require(`./model/bitmap-constructor.js`);

exports.bitMapObject = new constructor.Bitmap(bitMapFile);
console.log(exports.bitMapObject);
