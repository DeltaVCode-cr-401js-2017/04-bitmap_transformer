const assert = require('assert');

const sut = require('../index.js');
const { expect } = require('chai');

describe('ColorTransformModule', function(){
  describe('#invertColor()', function(){
    it('should have the same length as the original color table', function(done){
      expect(sut.invertedColor).to.have.lengthOf(970);
      done();
    });
  });
  describe('#toGreyScale()', function(){
    it('should have the same length as the original color table', function(done){
      expect(sut.greyscaleColor).to.have.lengthOf(970);
      done();
    });
  });
  describe('#scaleColor()', function(){
    it('should do a thing', function(done){
      expect();
      done();
    });
  });
  describe('#scaleColor()', function(){
    it('should break if given a value other than \'invert\', \'greyscale\', or \'colorify\'', function(done){
      expect(sut.breaks).to.be.a('undefined');
      done();
    });
  });
});
