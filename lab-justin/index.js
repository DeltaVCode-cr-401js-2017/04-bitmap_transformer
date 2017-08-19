const fs = require('fs');
const bitMapFile = fs.readFileSync(`assets/palette-bitmap.bmp`);
const constructor = require(`./model/bitmap-constructor.js`);
const colorChangerator = require('./model/color-constructor.js');
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
function buildFile(buffer,action){
  let bmp = new constructor.Bitmap(buffer);

  switch (action) {
  case 'invert':
    //Statements executed when the result of expression matches 'invert'
    //buf.fill(value[, offset[, end]][, encoding])
    colorChangerator.invertColor(bmp.colorTable);
    console.log(bmp.colorTable);
    fs.writeFileSync('output/inverted.bmp', buffer);
    break;
  case 'greyscale':
    //Statements executed when the result of expression matches 'greyscale'
    //buf.fill(value[, offset[, end]][, encoding])
    colorChangerator.greyscaleColor(bmp.colorTable);
    console.log(bmp.colorTable);
    fs.writeFileSync('output/greyified.bmp', buffer);
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
buildFile(bitMapFile,'greyscale');
