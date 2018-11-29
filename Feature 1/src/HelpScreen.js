class HelpScreen
{

  constructor()
  {
    this.img = new Image();
    this.img.src = "RWM1819-Help-A/Feature 1/Images/keys.png"

    var canvas = document.getElementById("mycanvas")
    canvas.id = 'mycanvas';
    mycanvas.width = window.innerWidth;
    mycanvas.height = window.innerHeight;
    mycanvas.style.position = "absolute";
    mycanvas.style.left = this.img.offsetLeft;
    mycanvas.style.top = this.img.offsetTop;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.pressed = false;


  }

  highlightW()
  {
    gameNs.ctx.clearRect(0,0,mycanvas.width, mycanvas.height)
    gameNs.ctx.beginPath();
    gameNs.ctx.rect(520,410,125,145);
    gameNs.ctx.lineWidth="6";
    gameNs.ctx.strokeStyle = "red";
    gameNs.ctx.stroke();
    gameNs.ctx.beginPath();
    gameNs.ctx.rect(950,410,125,145);
    gameNs.ctx.lineWidth="6";
    gameNs.ctx.strokeStyle = "green";
    gameNs.ctx.stroke();
  }

  highlightA()
{
  gameNs.ctx.clearRect(0,0,mycanvas.width, mycanvas.height)
  gameNs.ctx.beginPath();
  gameNs.ctx.rect(400,560,125,145);
  gameNs.ctx.lineWidth="6";
  gameNs.ctx.strokeStyle = "red";
  gameNs.ctx.stroke();
  gameNs.ctx.beginPath();
  gameNs.ctx
  gameNs.ctx.rect(810,560,125,145);
  gameNs.ctx.lineWidth="6";
  gameNs.ctx.strokeStyle = "green";
  gameNs.ctx.stroke();
}

highLightS()
{
  gameNs.ctx.clearRect(0,0,mycanvas.width, mycanvas.height)
  gameNs.ctx.beginPath();
  gameNs.ctx.rect(520,560,125,145);
  gameNs.ctx.lineWidth="6";
  gameNs.ctx.strokeStyle = "red";
  gameNs.ctx.stroke();
  gameNs.ctx.beginPath();
  gameNs.ctx.rect(950,560,125,145);
  gameNs.ctx.lineWidth="6";
  gameNs.ctx.strokeStyle = "green";
  gameNs.ctx.stroke();
}

highLightD()
{
  gameNs.ctx.clearRect(0,0,mycanvas.width, mycanvas.height)
  gameNs.ctx.beginPath();
  gameNs.ctx.rect(650,560,125,145);
  gameNs.ctx.lineWidth="6";
  gameNs.ctx.strokeStyle = "red";
  gameNs.ctx.stroke();
  gameNs.ctx.beginPath();
  gameNs.ctx.rect(1070,560,125,145);
  gameNs.ctx.lineWidth="6";
  gameNs.ctx.strokeStyle = "green";
  gameNs.ctx.stroke();
}

highLightSpace()
{
  gameNs.ctx.clearRect(0,0,mycanvas.width, mycanvas.height)
  gameNs.ctx.beginPath();
  gameNs.ctx.rect(620,870,370,145);
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
    var canvas = document.getElementById('mycanvas');
    var ctx = mycanvas.getContext('2d');
    //ctx.clearRect(0,0, mycanvas.width, mycanvas.height);
    document.body.style.background = "#FFFACD";
    ctx.font = '55px Times New Roman';

    var image = this.img;
    ctx.drawImage(image,400,400,800,700);
  }

}
