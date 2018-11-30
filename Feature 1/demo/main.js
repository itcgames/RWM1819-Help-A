var gameNs = {};

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

  this.img = new Image();
  this.img.src = "Images/keys.png"

  canvas.id = 'gameCanvas';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.position = "absolute";
  canvas.style.left = this.img.offsetLeft;
  canvas.style.top = this.img.offsetTop;
  gameNs.canvas = canvas;
  var ctx = canvas.getContext("2d");
  document.body.appendChild(canvas);
  gameNs.ctx = ctx;


  document.addEventListener("keydown", this.keyHandler, true);
}

function keyHandler(e)
{

  if(e.keyCode === 87 || e.keyCode === 38)//w key
  {
    gameNs.helpScreen.highlightW()
  }
  else if(e.keyCode === 65 || e.keyCode === 37)//a
  {
    gameNs.helpScreen.highlightA()
  }
  else if(e.keyCode === 83 || e.keyCode === 40)//s key
  {
    gameNs.helpScreen.highLightS()
  }
  else if(e.keyCode === 68 || e.keyCode === 39)// d key
  {
    gameNs.helpScreen.highLightD()
  }
  else if(e.keyCode === 82)
  {
    gameNs.helpScreen.highLightR()
  }
  else if(e.keyCode === 32)
  {
    gameNs.helpScreen.highLightSpace()
  }
  else {
    gameNs.ctx.clearRect(0,0,gameNs.canvas.width, gameNs.canvas.height)
  }

}

function draw(game)
{
  game.draw();
}
