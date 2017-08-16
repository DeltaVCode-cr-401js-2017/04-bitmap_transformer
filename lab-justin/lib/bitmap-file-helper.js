const fs = require('fs');

const bitMapFile = fs.readFileSync(`./assets/palette-bitmap.bmp`);

function Bitmap(bitMapFile){
  this.type = bitMapFile.toString('utf-8', 0, 2);
  this.size = bitMapFile.readUIntLE(0x2, 4);
  this.offset = bitMapFile.readUIntLE(0xA, 4);
  this.width = bitMapFile.readUIntLE(0x12, 4);
  this.height = bitMapFile.readUIntLE(0x16, 4);
  this.bpp = bitMapFile.readUIntLE(0x1c, 2);
  this.palleteColorCount = bitMapFile.readUIntLE(0x2e, 4);
}

var bitMapObject = new Bitmap(bitMapFile);
console.log(bitMapObject);
