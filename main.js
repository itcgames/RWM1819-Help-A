var gameNs = {};

function main()
{
  initCanvas();
  var game = new Game();
  gameNs.game = game;
  initCanvas();
  /*game.Update();
  game.draw();*/
}

function initCanvas()
{
  var canvas = document.createElement("canvas");

  canvas.id = 'gameCanvas';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var ctx = canvas.getContext("2d");
  document.body.appendChild(canvas);

  document.addEventListener("keydown", this.keyHandler, true);
}

function keyHandler(e)
{
  if(e.keyCode === 87 || e.keyCode === 38)//w key
  {
      
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
  game.draw;
}
