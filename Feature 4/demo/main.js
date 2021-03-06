var gameNs={};

function main()
{
  initCanvas();
  var game = new Game();
  gameNs.game = game;
  game.update();
  game.draw();
}

  function initCanvas()
  {
    var canvas = document.createElement("canvas");

    canvas.id = 'gameCanvas';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = "absolute";
    gameNs.canvas = canvas
    var ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);
    gameNs.ctx = ctx;

    document.addEventListener("keydown", this.keyHandler, true);
  }

  function keyHandler(e)
  {
    if(e.keyCode === 87 || e.keyCode === 38)//w key
    {
      if(gameNs.wall === true)
      {
        gameNs.wall = false
        gameNs.breakwall = true;
      }
      else if(gameNs.breakwall === true)
      {
        gameNs.breakwall = false
        gameNs.goalwall = true
      }
      else if (gameNs.goalwall === true)
      {
        gameNs.goalwall = false
        gameNs.display = false
      }
      gameNs.levelTips.Leveltipdisplay()
    }

  }
  function draw(game)
  {
    game.draw()
  }
