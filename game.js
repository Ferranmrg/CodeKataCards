class Game {
  constructor(Player1, Player2) {
    if(!Player1 || !Player2) throw new Error();

    this.player1 = Player1;
    this.player2 = Player2;
  }
}

module.exports = Game;
