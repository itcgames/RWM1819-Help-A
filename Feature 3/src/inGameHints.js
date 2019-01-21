class inGameHints
{
  constructor()
  {
    this.hintImg = new Image()
    this.hintImg.src = "../Images/hint.png"
    var canvas = document.getElementById("gameCanvas")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    canvas.style.position = "absolute";
    canvas.style.left = this.hintImg.offsetLeft;
    canvas.style.top = this.hintImg.offsetTop;
    this.display = false;
  }

  update()
  {
    var canvas = document.getElementById('gameCanvas')
    var ctx = canvas.getContext('2d')

  }

  DisplayHints()
  {
    this.display = true;
  }

  render()
  {
    var canvas = document.getElementById('gameCanvas')
    var ctx = canvas.getContext('2d')
    document.body.style.background = "#FFFACD"
    if(this.display === true)
    {
      var image = this.hintImg

      ctx.drawImage(image,600,200,200,200)
    }
  }
}
