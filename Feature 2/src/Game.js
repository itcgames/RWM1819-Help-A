var gameNs = {};
class Game()
{
  constructor()
  {
    gameNs.hintsAndTips = new hintsAndTips();
  }

  update()
  {
    gameNs.hintsAndTips.update()
    gameNs.hintsAndTips.render()
  }

  draw()
  {
    window.requestAnimationFrame(gameNs.game.draw)
    gameNs.hintsAndTips.render()
  }

}
