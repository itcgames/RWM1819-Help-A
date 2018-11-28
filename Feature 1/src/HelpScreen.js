class HelpScreen
{

  constructor()
  {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.pressed = false;

    this.img = new Image();
    this.img.src = "../Images/keys.png"
  }

  highlightW()
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

  highlightA()
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

highLightS()
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

highLightD()
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

highLightSpace()
{
  gameNs.ctx.clearRect(0,0,gameNs.canvas.width, gameNs.canvas.height)
  gameNs.ctx.beginPath();
  gameNs.ctx.rect(250,520,350,145);
  gameNs.ctx.lineWidth="6";
  gameNs.ctx.strokeStyle = "red";
  gameNs.ctx.stroke();
}

  update()
  {
    var canvas = document.getElementById('gameCanvas');
    var ctx = canvas.getContext('2d');
  }

  render()
  {
    var canvas = document.getElementById('gameCanvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0, canvas.width, canvas.height);
    document.body.style.background = "#FFFACD";
    ctx.font = '55px Times New Roman';

    var image = this.img;
    ctx.drawImage(image,20,0,800,800);
  }

}
