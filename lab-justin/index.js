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
    var change = colorChangerator.invertColor(bmp.colorTable);
    console.log(bmp.colorTable);
    fs.writeFileSync('output/inverted.bmp', buffer);
    return change;
  case 'greyscale':
    //Statements executed when the result of expression matches 'greyscale'
    //buf.fill(value[, offset[, end]][, encoding])
    var change = colorChangerator.greyscaleColor(bmp.colorTable);
    console.log(bmp.colorTable);
    fs.writeFileSync('output/greyified.bmp', buffer);
    return change;
  case 'colorify':
    //Statements executed when the result of expression matches 'colorify'
    console.log('tbd');
    break;
  default:
    //Statements executed when none of the values match the value of the expression
    console.log('Invalid input, please try again.');
    return undefined;
  }
}

exports.invertedColor = buildFile(bitMapFile,'invert');
exports.greyscaleColor = buildFile(bitMapFile,'greyscale');
exports.colorfy = buildFile(bitMapFile,'colorify');
exports.breaks = buildFile(bitMapFile,'this string is not valid');
