const assert = require('assert');

const sut = require('../index.js');
const { expect } = require('chai');

describe('ConstructorModule', function(){
  describe('#Bitmap Constructor function', function(){
    it('should return an object typeof', function(done){
      expect(sut.bitMapObject).to.be.a('object');

      done();
    });
  });
});
