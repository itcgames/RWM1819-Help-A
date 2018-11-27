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
