const assert = require('assert');

const sut = require('../index.js');
const { expect } = require('chai');

describe('ColorTransformModule', function(){
  describe('#invertColor()', function(){
    it('should have 256 colors', function(done){
      expect(sut.invertedColor).to.have.lengthOf(10956);
      done();
    });
  });
  describe('#toGreyScale()', function(){
    it('should do a thing', function(done){
      expect();
      done();
    });
  });
  describe('#scaleColor()', function(){
    it('should do a thing', function(done){
      expect();
      done();
    });
  });
});
