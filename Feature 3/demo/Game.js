var gameNs = {};
class Game
{
  constructor()
  {
    gameNs.inGameHints = new inGameHints();
    gameNs.timer = new Timer()
  }

  update()
  {
    this.draw()
     gameNs.timerStart = true
     gameNs.timer.update()
     gameNs.inGameHints.update()
     gameNs.inGameHints.render()
     var now = Date.now()
     var deltaTime = (now - gameNs.previousTime)
     gameNs.previousTime = now
     gameNs.timer.update(deltaTime)
     var countDownDate = new Date("Jan 5, 2021 15:37:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and secon

  var seconds = Math.floor((distance % (1000 * 30)) / 1000);

  // Display the result in the element with id="demo"
  console.log(seconds)

  // If the count down is finished, write some text
  if (seconds <= 0) {
    clearInterval(x);
    gameNs.inGameHints.DisplayHints();
    debugger
  }
}, 1000);
  }

  draw()
  {
    window.requestAnimationFrame(gameNs.game.draw)
    gameNs.inGameHints.render()
  }

}
