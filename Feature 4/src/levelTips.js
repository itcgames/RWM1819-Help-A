var gameNs = {}
class levelTips
{
  constructor()
  {
    this.tipsImg = new Image()
    var canvas = document.getElementById("gameCanvas")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    canvas.style.position = "absolute";
    canvas.style.left = this.tipsImg.offsetLeft;
    canvas.style.top = this.tipsImg.offsetTop;
    gameNs.display = true;
    gameNs.wall = true
    gameNs.breakwall = false
    gameNs.goalwall = false;
  }

  update()
  {
    var canvas = document.getElementById('gameCanvas')
    var ctx = canvas.getContext('2d')
    this.Leveltipdisplay()
  }

  Leveltipdisplay()
  {
    var canvas = document.getElementById('gameCanvas')
    var ctx = canvas.getContext('2d')
    if(gameNs.wall === true)
    {
      ctx.clearRect(0,0,canvas.width, canvas.height)
      this.tipsImg.src = "../Images/wall.png"
    }
    else if(gameNs.breakwall === true)
    {
      ctx.clearRect(0,0,canvas.width, canvas.height)
      this.tipsImg.src = "../Images/breakwall.png"
    }
    else if(gameNs.goalwall === true)
    {
    ctx.clearRect(0,0,canvas.width, canvas.height)
      this.tipsImg.src = "../Images/goal.png"
    }
    else if(gameNs.display === false)
    {
      ctx.clearRect(0,0,canvas.width, canvas.height)
    }
  }


  render()
  {
    var canvas = document.getElementById('gameCanvas')
    var ctx = canvas.getContext('2d')
    document.body.style.background = "#FFFACD"
    if(gameNs.display === true)
    {
      var image = this.tipsImg

      ctx.drawImage(image,400,400,200,200)
    }
  }
}
