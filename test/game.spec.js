let chai = require('chai'),
  path = require('path');

chai.should();

let Game = require(path.join(__dirname, '..', 'game'));

describe('Game', () => {
  describe('#constructor()', () => {
    it('requires two players', () => {
      () => {
        new Game();
      }.should.throw(Error);

    });
  });
});
