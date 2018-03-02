let chai = require('chai'),
  path = require('path');

chai.should();

let Game = require(path.join(__dirname, '..', 'game'));
let Player = require(path.join(__dirname, '..', 'player'));

describe('Game', () => {
  describe('#constructor()', () => {
    it('should fail because not params sent', () => {
      () => {
        new Game();
      }.should.throw(Error);
    });

    it('should work because params sent', () => {
      () => {
        let Player1 = new Player();
        let Player2 = new Player();
        new Game(Player1, Player2);
      }.should.not.throw(Error);

    });
  });
});
