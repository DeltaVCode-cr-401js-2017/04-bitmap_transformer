const fs = require('fs');
const bitMapFile = fs.readFileSync(`assets/palette-bitmap.bmp`);
const constructor = require(`./model/bitmap-constructor.js`);
const colorChangerator = require('./model/color-constructor.js');


exports.bitMapObject = new constructor.Bitmap(bitMapFile);
console.log(exports.bitMapObject.size);
//action options: 'invert', 'greyscale', 'colorify'
function buildFile(buffer,action){
  let bmp = new constructor.Bitmap(buffer);

  switch (action) {
  case 'invert':
    //Statements executed when the result of expression matches 'invert'
    //buf.fill(value[, offset[, end]][, encoding])
    var inverted = colorChangerator.invertColor(bmp.colorTable);
    fs.writeFileSync('output/inverted.bmp', buffer);
    return inverted;
  case 'greyscale':
    //Statements executed when the result of expression matches 'greyscale'
    //buf.fill(value[, offset[, end]][, encoding])
    var greyified = colorChangerator.greyscaleColor(bmp.colorTable);
    fs.writeFileSync('output/greyified.bmp', buffer);
    return greyified;
  case 'colorify':
    //Statements executed when the result of expression matches 'colorify'
    //buf.fill(value[, offset[, end]][, encoding])
    var colorified = colorChangerator.colorfy(bmp.colorTable);
    fs.writeFileSync('output/colorfied.bmp', buffer);
    console.log(colorified.length);
    return colorified;
  default:
    //Statements executed when none of the values match the value of the expression
    return undefined;
  }
}

exports.buildFile = buildFile;
buildFile(bitMapFile,'colorify');
