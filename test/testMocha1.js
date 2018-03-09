const assert = require('assert');

describe('Array', () => {
  describe('INdexOf()', () => {
    it('should return -1', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
