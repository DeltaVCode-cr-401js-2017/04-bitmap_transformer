const fs = require('fs');
const bitMapFile = fs.readFileSync(`assets/palette-bitmap.bmp`);
const sut = require('../index.js');
const { expect } = require('chai');

describe('ColorTransformModule', function(){
  describe('#invertColor()', function(){
    it('should have the same length as the original color table', function(done){
      expect(sut.buildFile(bitMapFile,'invert')).to.have.lengthOf(970);
      done();
    });
  });
  describe('#toGreyScale()', function(){
    it('should have the same length as the original color table', function(done){
      expect(sut.buildFile(bitMapFile,'greyscale')).to.have.lengthOf(970);
      done();
    });
  });
  describe('#scaleColor()', function(){
    it('should have the same length as the original color table', function(done){
      expect(sut.buildFile(bitMapFile,'colorify')).to.have.lengthOf(970);
      done();
    });
  });
  describe('Invalid input', function(){
    it('should break if given a value other than \'invert\', \'greyscale\', or \'colorify\'', function(done){
      expect(sut.buildFile(bitMapFile,'this string is not valid')).to.be.a('undefined');
      done();
    });
  });
});
