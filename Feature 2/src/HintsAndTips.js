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
          "hint":"pressing right arrow will make the player move right"
        },
        {
          "hint":"holding the jump button will make you jump for longer"
        },
        {
          "hint":"gravity is in effect, if you're not on solid ground you will fall!"
        },
        {
          "hint":"You can't walk through walls!"
        }
      ]
    gameNs.hints = gameNs.hintsArr[gameNs.count].hint
  }

  nextHint()
  {
    if(gameNs.count < gameNs.hintsArr.length-1)
    {
      gameNs.count = gameNs.count +1;
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

    }

    render()
    {
      var canvas = document.getElementById('gameCanvas');
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0,0, canvas.width, canvas.height);
      document.body.style.background = "#FFFACD";
      ctx.font = '20px Impact';
      ctx.fillStyle = "Black"
      ctx.fillText(gameNs.hints, 100,100)
    }

  }
