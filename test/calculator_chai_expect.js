const { expect } = require('chai');
const calculator = require('../app/calculator');

describe('Calcultator tests using EXPECT interface from CHAI module: ', () => {
  describe('Check addTested Function: ', () => {
    it("Check the returned value using: expect(value).to.equal('value'): ", () => {
      const result = calculator.addTested('text');
      expect(result).to.equal('text tested');
    });
    it("Check the returned value using: expect(value).to.be.a('value')): ", () => {
      const result = calculator.addTested('text');
      expect(result).to.be.a('string');
    });
    it('Check the returned value using: expect(value).to.have.lengthOf(value): ', () => {
      const result = calculator.addTested('text');
      expect(result).to.have.lengthOf(11);
    });
  });
});
