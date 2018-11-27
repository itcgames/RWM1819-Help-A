var gameNs={};

function main()
{
  initCanvas();
  var game = new Game();
  gameNs.game = game;
  initCanvas();
  game.update();
  game.draw();
  gameNs.count = 0;
}

  function initCanvas()
  {
    var canvas = document.createElement("canvas");

    canvas.id = 'gameCanvas';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gameNs.canvas = canvas;
    var ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);
    gameNs.ctx = ctx;

    document.addEventListener("keydown", this.keyHandler, true);
  }

  function keyHandler(e)
  {

    if(e.keyCode === 37)//a
    {
      gameNs.hintsAndTips.prevHint()
    }
    else if(e.keyCode === 39)// d key
    {
      gameNs.hintsAndTips.nextHint()
    }

  }
  function draw(game)
  {
    game.draw()
  }
