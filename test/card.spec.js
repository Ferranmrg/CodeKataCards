let chai = require('chai'),
  path = require('path');

chai.should();

let Card = require(path.join(__dirname, '..', 'card'));

describe('Card', () => {
  describe('#constructor()', () => {
    it('should fail because not params sent', () => {
      () => {
        new Card();
      }.should.throw(Error);
    });

    it('should work because params sent', () => {
      () => {
        new Card();
      }.should.not.throw(Error);

    });
  });
});
