var gameNs = {};

function main()
{
  initCanvas();
  var game = new Game();
  gameNs.game = game;
  initCanvas();
  game.update();
  game.draw();
}

function initCanvas()
{
  var canvas = document.createElement("canvas");

  canvas.id = 'gameCanvas';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var ctx = canvas.getContext("2d");
  document.body.appendChild(canvas);
  gameNs.ctx = ctx;



  document.addEventListener("keydown", this.keyHandler, true);

  this.img = new Image();
  this.img.src = "Images/keys.png"


}

function keyHandler(e)
{
  if(e.keyCode === 87 || e.keyCode === 38)//w key
  {
    gameNs.ctx.rect(20,20,0,0);
    gameNs.ctx.lineWidth="6";
    gameNs.ctx.strokeStyle = "red";
    gameNs.ctx.stroke();
  }
  else if(e.keyCode === 65 || e.keyCode === 37)//a
  {

  }
  else if(e.keyCode === 83 || e.keyCode === 40)//s key
  {

  }
  else if(e.keyCode === 68 || e.keyCode === 39)// d key
  {

  }
  else if(e.keyCode === 32)
  {

  }
}

function draw(game)
{
  game.draw();
}
