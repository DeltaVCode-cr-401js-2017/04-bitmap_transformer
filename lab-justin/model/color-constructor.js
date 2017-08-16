exports.invertColor = function(img){
  var invertedColorArray = img.map(function(item){
    let invertedColor = 0xff - item;
    return invertedColor;
  });

  console.log(invertedColorArray.length);
  return invertedColorArray;
};
