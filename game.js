let Player = require('./player');

class Game {
  constructor(Players) {
    if(!Players) throw new Error();

    this.players = Players;
  }

  set players(players) {
    let modelPlayer = new Player();
    players.forEach((player) => {
      if (typeof player !== typeof modelPlayer) {
        throw new Error('Not sending a Player');
      }
    });
    this._players = players;
  }
}

module.exports = Game;
