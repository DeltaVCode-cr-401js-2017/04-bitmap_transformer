const fs = require('fs');
const bitMapFile = fs.readFileSync(`assets/palette-bitmap.bmp`);
const constructor = require(`./model/bitmap-constructor.js`);

var bitMapObject = new constructor.Bitmap(bitMapFile);
console.log(bitMapObject);
