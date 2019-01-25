var gameNs = {}
class levelTips
{
  constructor()
  {
    this.tipsImg = new Image()
    var canvas = document.getElementById("mycanvas")
    var tips = ""
    gameNs.tips = tips
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    canvas.style.position = "absolute";
    canvas.style.left = this.tipsImg.offsetLeft;
    canvas.style.top = this.tipsImg.offsetTop;
    gameNs.display = true;
    this.wall = true
    this.breakwall = false
    this.goalwall = false;
    this.spacePressed = false
    this.tipsCount = 0
    this.tipsArr =[
        {
          "Tips":"Walls can not be blown up by the bomb"
        },
        {
          "Tips":"Broken walls can be blown up by the bomb, this can create a new passage"
        },
        {
          "Tips":"The player aims to find the goal which is hidden underneath a broken wall"
        },
        {
          "Tips":"Pressing the Space button will place a bomb"
        }
      ]
    this.tips = this.tipsArr[this.tipsCount].Tips
    this.Leveltipdisplay()
  }

  update()
  {
    var canvas = document.getElementById('mycanvas')
    var ctx = canvas.getContext('2d')
    //this.Leveltipdisplay()
  }

  Leveltipdisplay()
  {
    var canvas = document.getElementById('mycanvas')
    var ctx = canvas.getContext('2d')


    if(this.wall === true)
    {
      ctx.clearRect(0,0,canvas.width, canvas.height)
      this.tipsImg.src = "img/borderWallDown.png"
      this.tips = (this.tipsArr[this.tipsCount].Tips)

    }
    else if(this.breakwall === true)
    {
      ctx.clearRect(0,0,canvas.width, canvas.height)
      this.tipsImg.src = "img/destructableWall.png"
      this.tipsCount +=1
      this.tips = (this.tipsArr[this.tipsCount].Tips)
    }
    else if(this.goalwall === true)
    {
    ctx.clearRect(0,0,canvas.width, canvas.height)
      this.tipsImg.src = "img/exit.png"
      this.tipsCount +=1
      this.tips = (this.tipsArr[this.tipsCount].Tips)
    }
    else if(gameNs.display === false && this.tipsCount < 3)
    {
      ctx.clearRect(0,0,canvas.width, canvas.height)
      this.tipsCount+=1
      this.tips = (this.tipsArr[this.tipsCount].Tips)
    }
    else if (this.spacePressed === true){
      ctx.clearRect(0,0,canvas.width, canvas.height)
    }
  }


  render()
  {
    var canvas = document.getElementById('mycanvas')
    var ctx = canvas.getContext('2d')
    document.body.style.background = "#FFFACD"
    if(gameNs.display === true)
    {
      var image = this.tipsImg
      ctx.font = '38px Adventure';
      ctx.fillStyle = "Black"
      ctx.fillText(this.tips, 100,900)
      ctx.drawImage(image,900,400,200,200)
    }
    else if (gameNs.display===false && this.spacePressed === false) {
      ctx.fillText(this.tips, 100,900)
    }
  }
}
