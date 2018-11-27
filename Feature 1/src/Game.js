var gameNs = {};
class Game
{
  constructor()
  {
    gameNs.helpScreen = new HelpScreen();
  }

  update()
  {
    gameNs.helpScreen.update();
    gameNs.helpScreen.render();
  }

  draw()
   {
     window.requestAnimationFrame(gameNs.game.draw);
     gameNs.helpScreen.render();
   }

}
