exports.invertColor = function(colorTable){
  console.log(colorTable.length);
  var invertedColorArray = [];
  colorTable.forEach(function(item,i){
    invertedColorArray.push(colorTable[i] = ~item);
  });
  console.log(invertedColorArray.length);
  return invertedColorArray;
};
exports.greyscaleColor = function(colorTable){
  var greyColorTable = [];
  for ( let i = 0; i < colorTable.length; i+=4){
    var colorPiece = colorTable.slice([i], i+4);
    var greyify = (colorPiece[0]+colorPiece[1]+colorPiece[2])/3;
    colorPiece[0] = greyify;
    colorPiece[1] = greyify;
    colorPiece[2] = greyify;
    greyColorTable.push(colorPiece);
  }
  console.log('grey color table length: ',colorTable.length);
  return colorTable;
};
exports.colorfy = function(colorTable){
  var colorfyColorTable = [];
  for ( let i = 0; i < colorTable.length; i+=4){
    var colorPiece = colorTable.slice([i], i+4);
    colorPiece[1] = colorPiece[1] * 1.5;
    colorfyColorTable.push(colorPiece);
  }
  return colorfyColorTable;
};
