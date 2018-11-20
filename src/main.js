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
    gameNs.ctx.clearRect(0,0,gameNs.canvas.width, gameNs.canvas.height)
    gameNs.ctx.beginPath();
    gameNs.ctx.rect(140,20,125,145);
    gameNs.ctx.lineWidth="6";
    gameNs.ctx.strokeStyle = "red";
    gameNs.ctx.stroke();
    gameNs.ctx.beginPath();
    gameNs.ctx.rect(570,20,125,145);
    gameNs.ctx.lineWidth="6";
    gameNs.ctx.strokeStyle = "green";
    gameNs.ctx.stroke();
  }
  else if(e.keyCode === 65 || e.keyCode === 37)//a
  {
    gameNs.ctx.clearRect(0,0,gameNs.canvas.width, gameNs.canvas.height)
    gameNs.ctx.beginPath();
    gameNs.ctx.rect(19,190,125,145);
    gameNs.ctx.lineWidth="6";
    gameNs.ctx.strokeStyle = "red";
    gameNs.ctx.stroke();
    gameNs.ctx.beginPath();
    gameNs.ctx
    gameNs.ctx.rect(435,190,125,145);
    gameNs.ctx.lineWidth="6";
    gameNs.ctx.strokeStyle = "green";
    gameNs.ctx.stroke();
  }
  else if(e.keyCode === 83 || e.keyCode === 40)//s key
  {
    gameNs.ctx.clearRect(0,0,gameNs.canvas.width, gameNs.canvas.height)
    gameNs.ctx.beginPath();
    gameNs.ctx.rect(140,190,125,145);
    gameNs.ctx.lineWidth="6";
    gameNs.ctx.strokeStyle = "red";
    gameNs.ctx.stroke();
    gameNs.ctx.beginPath();
    gameNs.ctx.rect(570,190,125,145);
    gameNs.ctx.lineWidth="6";
    gameNs.ctx.strokeStyle = "green";
    gameNs.ctx.stroke();
  }
  else if(e.keyCode === 68 || e.keyCode === 39)// d key
  {
    gameNs.ctx.clearRect(0,0,gameNs.canvas.width, gameNs.canvas.height)
    gameNs.ctx.beginPath();
    gameNs.ctx.rect(270,190,125,145);
    gameNs.ctx.lineWidth="6";
    gameNs.ctx.strokeStyle = "red";
    gameNs.ctx.stroke();
    gameNs.ctx.beginPath();
    gameNs.ctx.rect(690,190,125,145);
    gameNs.ctx.lineWidth="6";
    gameNs.ctx.strokeStyle = "green";
    gameNs.ctx.stroke();
  }
  else if(e.keyCode === 32)
  {
    gameNs.ctx.clearRect(0,0,gameNs.canvas.width, gameNs.canvas.height)
    gameNs.ctx.beginPath();
    gameNs.ctx.rect(250,520,350,145);
    gameNs.ctx.lineWidth="6";
    gameNs.ctx.strokeStyle = "red";
    gameNs.ctx.stroke();
  }

}

function draw(game)
{
  game.draw();
}
