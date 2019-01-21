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
    this.hintImg = new Image()
    this.hintImg.src = "Images/hint.png"


    canvas.id = 'gameCanvas';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = "absolute";
    canvas.style.left = this.hintImg.offsetLeft;
    canvas.style.top = this.hintImg.offsetTop;
    gameNs.canvas = canvas
    var ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);
    gameNs.ctx = ctx;

    document.addEventListener("keydown", this.keyHandler, true);
  }

  function keyHandler(e)
  {

  }
  function draw(game)
  {
    game.draw()
  }
