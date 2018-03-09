require('chai').should();
const calculator = require('../app/calculator');

describe('Calcultator tests using SHOULD interface from CHAI module: ', () => {
  describe('Check addTested Function: ', () => {
    it('Check the returned value using: value.should.equal(value): ', () => {
      const result = calculator.addTested('text');
      result.should.equal('text tested');
    });
    it("Check the returned value using: value.should.be.a('value'): ", () => {
      const result = calculator.addTested('text');
      result.should.be.a('string');
    });
    it('Check the returned value using: expect(value).to.have.lengthOf(value): ', () => {
      const result = calculator.addTested('text');
      result.should.have.lengthOf(11);
    });
  });
});
