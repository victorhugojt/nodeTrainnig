var assert = require('assert');
describe('Array',function(){
    describe('INdexOf()',function(){
      it('should return -1',function(){
          assert.equal([1,2,3].indexOf(4),-1);
      });
    });
});