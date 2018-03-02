let chai = require('chai'),
  path = require('path');

chai.should();

let Player = require(path.join(__dirname, '..', 'player'));

describe('Player', () => {
  describe('#constructor()', () => {
    it('requires two players', () => {
      () => {
        new Player();
      }.should.not.throw(Error);

    });
  });
});
