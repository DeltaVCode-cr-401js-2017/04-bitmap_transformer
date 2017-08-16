function Bitmap(bitMapFile){
  this.type = bitMapFile.toString('utf-8', 0, 2);
  this.size = bitMapFile.readUIntLE(0x2, 4);
  this.offset = bitMapFile.readUIntLE(0xA, 4);
  this.width = bitMapFile.readUIntLE(0x12, 4);
  this.height = bitMapFile.readUIntLE(0x16, 4);
  this.bpp = bitMapFile.readUIntLE(0x1c, 2);
  this.palleteColorCount = bitMapFile.readUIntLE(0x2e, 4);
  this.imgData = bitMapFile.slice(0x7a);
  this.colorTable = bitMapFile.slice(0x36, this.palleteColorCount * 4);
}

exports.Bitmap = Bitmap;
