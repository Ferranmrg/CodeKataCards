let chai = require('chai'),
  path = require('path');

chai.should();

let Game = require(path.join(__dirname, '..', 'game'));
let Player = require(path.join(__dirname, '..', 'player'));

describe('Game', () => {
  describe('#constructor()', () => {
    it('requires two players', () => {
      () => {
        new Game();
      }.should.throw(Error);

      () => {
        let Player1 = new Player();
        let Player2 = new Player();
        new Game(Player1, Player2);
      }.should.throw(Error);

    });
  });
});
