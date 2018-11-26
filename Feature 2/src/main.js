var gameNs={};

function main()
{
  initCanvas();
  var game = new Game();
  gameNs.game = game
  initCanvas()
  game.update();
  game.draw();
}

  function initCanvas()
  {
    var canvas = document.createElement("canvas");

    canvas.id = "gameCanvas"
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    canvas.style.position = "absolute"
    gameNs.canvas = canvas
    var ctx = canvas.getContext("2d")
    document.body.appendChild(canvas)
    gameNs.ctx= ctx

    document.addEventListener("keydown", this.keyHandler, true);

  }

  function draw(game)
  {
    game.draw()
  }
