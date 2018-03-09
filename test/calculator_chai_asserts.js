const { assert } = require('chai');
const calculator = require('../app/calculator');

describe('Calcultator tests using ASSERT interface from CHAI module: ', () => {
  describe('Check addTested Function: ', () => {
    it("Check the returned value using: assert.equal(value,'value'): ", () => {
      const result = calculator.addTested('text');
      assert.equal(result, 'text tested');
    });
    it("Check the returned value using: assert.typeOf(value,'value'): ", () => {
      const result = calculator.addTested('text');
      assert.typeOf(result, 'string');
    });
    it("Check the returned value using: assert.lengthOf(value,'value'): ", () => {
      const result = calculator.addTested('text');
      assert.lengthOf(result, 11);
    });
  });
});
