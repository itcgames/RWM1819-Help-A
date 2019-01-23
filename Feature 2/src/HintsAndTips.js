class hintsAndTips
{
  constructor()
  {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.pressed = false
    gameNs.count = 0
    gameNs.hintsArr =[
        {
          "hint":"Bombs can blow up broken walls to create a new path."
        },
        {
          "hint":"Your remaining lives effect your score, The more lives the higher score."
        },
        {
          "hint":"Strategically placed bombs can break multiple walls."
        },
        {
          "hint":"Bombs damage the enemy player."
        }
      ]
    gameNs.hintNum = "Hint #"+(gameNs.count)
    gameNs.hints = gameNs.hintsArr[gameNs.count].hint
  }

  nextHint()
  {
    if(gameNs.count < gameNs.hintsArr.length-1)
    {
      gameNs.count = gameNs.count +1;
      gameNs.hintNum = "Hint #"+(gameNs.count)
    }
    else
    {
      gameNs.count = 0
    }

    gameNs.hints = gameNs.hintsArr[gameNs.count].hint
    gameNs.ctx.clearRect(0,0,gameNs.canvas.width, gameNs.canvas.height)
    }

    prevHint()
    {
      if(gameNs.count > 0)
      {
        gameNs.count = gameNs.count - 1;
        gameNs.hintNum = "Hint #"+(gameNs.count)
      }
      else
      {
        gameNs.count = gameNs.hintsArr.length-1

      }

      gameNs.hints = gameNs.hintsArr[gameNs.count].hint
      gameNs.ctx.clearRect(0,0,gameNs.canvas.width, gameNs.canvas.height)

      }

    update()
    {
      var canvas = document.getElementById('mycanvas');
      var ctx = canvas.getContext('2d');
      gameNs.hintNum = "Hint #"+(gameNs.count)
    }

    render()
    {
      var canvas = document.getElementById('mycanvas');
      var ctx = mycanvas.getContext('2d');
      //ctx.clearRect(0,0, mycanvas.width, mycanvas.height);
      document.body.style.background = "#FFFACD";
      ctx.font = '45px Adventure';
      ctx.fillStyle = "Black"
      ctx.fillText(gameNs.hints, 100,650)
      ctx.fillText(gameNs.hintNum, 200,350)
    }

  }
