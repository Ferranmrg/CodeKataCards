let chai = require('chai'),
  path = require('path');

chai.should();

let Deck = require(path.join(__dirname, '..', 'deck'));
let Card = require(path.join(__dirname, '..', 'card'));

describe('Deck', () => {
  describe('#constructor()', () => {
    it('should fail because not params sent', () => {
      () => {
        new Deck();
      }.should.throw(Error);
    });

    it('should work because params sent', () => {
      () => {
        let Cards = [];
        new Game(Cards);
      }.should.not.throw(Error);

    });
  });
});
