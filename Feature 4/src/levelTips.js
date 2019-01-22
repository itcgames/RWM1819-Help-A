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
    gameNs.tipsCount = 0
    gameNs.breakwall = false
    gameNs.goalwall = false;
    gameNs.tipsArr =[
        {
          "Tips":"Walls can not be blown up by the bomb"
        },
        {
          "Tips":"Broken walls can be blown up by the bomb, this can create a new passage"
        },
        {
          "Tips":"The player aims to find the goal which is hidden underneath a broken wall"
        },
      ]
    gameNs.tips = gameNs.tipsArr[gameNs.tipsCount].Tips
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
      gameNs.Tips = gameNs.tipsArr[gameNs.tipsCount].Tips

    }
    else if(gameNs.breakwall === true)
    {
      ctx.clearRect(0,0,canvas.width, canvas.height)
      this.tipsImg.src = "../Images/breakwall.png"
      gameNs.tipsCount+=1
      gameNs.Tips = gameNs.tipsArr[gameNs.tipsCount].Tips
    }
    else if(gameNs.goalwall === true)
    {
    ctx.clearRect(0,0,canvas.width, canvas.height)
      this.tipsImg.src = "../Images/goal.png"
      gameNs.tipsCount+=1
      gameNs.Tips = gameNs.tipsArr[gameNs.tipsCount].Tips
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
      ctx.font = '38px Impact';
      ctx.fillStyle = "Black"
      ctx.fillText(gameNs.Tips, 300,650)
      ctx.drawImage(image,400,400,200,200)
    }
  }
}
