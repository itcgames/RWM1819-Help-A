class hintsAndTips
{
  constructor()
  {
    this.width = window.innerWidth
    this height = window.innerHeight
    this.pressed = false
    
  }

  getHint()
  {
    if(localStorage.getItem("hintsAndTips")===null)
    {
      localStorage.setItem('hintsAndTips', JSON.stringify(this.hintsAndTips))
    }
    this.hintsAndTips = JSON.parse(localStorage.getItem('hintsAndTips'))

    if(this.count<1)
    {
      t
    }
  }

  update()
  {
    var canvas = document.getElementById('gameCanvas')
    var ctx = canvas.getContext('2d')
  }

  render()
  {
    var canvas = document.getElementById("gameCanvas")
    var ctx = canvas.getContext('2d')
    ctx.clearRect(0,0,canvas.width,canvas.height)
    document.body.style.background = "#FFFACD"
    ctx.font = "55px Times New Roman"
  }
}
