exports.invertColor = function(img){
  var invertedColorArray = img.map(function(item){
    let invertedColor = 0xff - item;
    return invertedColor;
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
  return greyColorTable;
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
