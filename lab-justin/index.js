const fs = require('fs');
const bitMapFile = fs.readFileSync(`assets/palette-bitmap.bmp`);
const constructor = require(`./model/bitmap-constructor.js`);
const colorChangerator = require('./model/color-constructor.js');
console.log(bitMapFile);
/*
exports.bitMapObject = new constructor.Bitmap(bitMapFile);
exports.invertedColor = colorChangerator.invertColor(exports.bitMapObject.imgData);
exports.greyscaleColor = colorChangerator.greyscaleColor(exports.bitMapObject.colorTable);
exports.colorfy = colorChangerator.colorfy(exports.bitMapObject.colorTable);
console.log(exports.invertedColor);
console.log(exports.bitMapObject);
console.log(exports.greyscaleColor);
console.log(exports.colorfy);
*/

//action options: 'invert', 'greyscale', 'colorify'
function buildFile(file,action){
  switch (action) {
  case 'invert':
    //Statements executed when the result of expression matches 'invert'
    var bitMapObject = new constructor.Bitmap(file);
    bitMapObject.imgData = colorChangerator.invertColor(bitMapObject.imgData);
    var bmp = [];
    bmp[0] = bitMapObject.type.toString('hex');
    console.log(bmp);
    //fs.writeFileSync('output/inverted.bmp', bmp);
    break;
  case 'greyscale':
    //Statements executed when the result of expression matches 'greyscale'
    break;
  case 'colorify':
    //Statements executed when the result of expression matches 'colorify'
    break;
  default:
    //Statements executed when none of the values match the value of the expression

    break;
  }
}

buildFile(bitMapFile,'invert');
