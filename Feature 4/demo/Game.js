var gameNs = {};
class Game
{
  constructor()
  {
    gameNs.levelTips = new levelTips()
  }

  update()
  {
     this.draw()
     gameNs.levelTips.update()
     gameNs.levelTips.render()
  }

  draw()
  {
    window.requestAnimationFrame(gameNs.game.draw)
    gameNs.levelTips.render()
  }

}
