const sut = require('../index.js');
const { expect } = require('chai');

describe('ConstructorModule', function(){
  describe('#Bitmap Constructor function', function(){
    it('should return an object typeof', function(done){
      expect(sut.bitMapObject).to.be.a('object');
      expect(sut.bitMapObject).to.have.property('bpp');
      done();
    });
    it('should return a property of bpp', function(done){
      expect(sut.bitMapObject).to.have.property('bpp');
      done();
    });
  });
});
