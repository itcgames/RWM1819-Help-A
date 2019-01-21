gameNs = {}
class Timer
{

  constructor()
  {
    gameNs.start;
    this.minutes;
    this.seconds;
    this.duration=0;
    gameNs.timerStart = false;
    gameNs.score = "00:00";
    this.posX=405;
    this.posY=50;
  }
  updateFromNet(time, start)
  {
    gameNs.timerStart = time;
    gameNs.start = start;

  }
    timer()
    {


        this.diff = this.duration + (((Date.now() - gameNs.start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        this.minutes = (this.diff / 60) | 0;
        this.seconds = (this.diff % 60) | 0;

        this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
        this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;
        gameNs.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;

        gameNs.score = (this.minutes+":"+this.seconds);

        setInterval(this.timer, 1000);
      }



    update(deltaTime)
        {
          var canvas = document.getElementById("gameCanvas");
          var ctx = canvas.getContext("2d");
          ctx.fillStyle ='white';
          ctx.font = '55px Adventure Regular';
          ctx.strokeStyle = 'black';

          this.timer();
          //console.log("Playerposx "+gameNs.playScene.player.x)
          ctx.fillText(gameNs.score,this.posX,this.posY);
          ctx.strokeText(gameNs.score,this.posX,this.posY);

        }
  }
