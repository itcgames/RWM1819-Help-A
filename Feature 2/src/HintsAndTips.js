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
          "hint":"Click on an object to move it, let go of the object to place the object."
        },
        {
          "hint":"Fans will blow the ball in the opposite direction, \n\nmagnets will attract the ball"
        },
        {
          "hint":"trampolines make the ball fly back up"
        },
        {
          "hint":"Get the ball to the cup as quickly as possible for a higher score."
        },
        {
          "hint":"Use ramps to change the direction of the ball."
        }
      ]
    gameNs.hintNum = "Hint #"+(gameNs.count+1)
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
      var canvas = document.getElementById('gameCanvas');
      var ctx = canvas.getContext('2d');
      gameNs.hintNum = "Hint #"+(gameNs.count)
    }

    render()
    {
      var canvas = document.getElementById('mycanvas');
      var ctx = mycanvas.getContext('2d');
      //ctx.clearRect(0,0, mycanvas.width, mycanvas.height);
      document.body.style.background = "#FFFACD";
      ctx.font = '45px Impact';
      ctx.fillStyle = "Black"
      ctx.fillText(gameNs.hints, 300,650)
      ctx.fillText(gameNs.hintNum, 800,350)
    }

  }
