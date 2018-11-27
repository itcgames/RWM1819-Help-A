class hintsAndTips
{
  constructor()
  {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.pressed = false
    this.hints = ""
    this.count = 1
    this.hintsArr =[
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
  }

    getHint()
    {
      for(var i = 0; i < 4; i++)
      {
        this.hints = this.hintsArr[i].hint
        document.write(this.hints)
      }

    }

    update()
    {
      var canvas = document.getElementById('gameCanvas')
      var ctx = canvas.getContext('2d')
      this.getHint();
    }

    render()
    {
      var canvas = document.getElementById("gameCanvas");
      var ctx = canvas.getContext("2d");
      ctx.clearRect(0,0, canvas.width, canvas.height);
      document.body.style.background = "#FFFACD"
      this.hint
    }

  }
