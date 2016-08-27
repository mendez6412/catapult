var canvas = document.querySelector("#myCanvas");
var context = canvas.getContext("2d");
var player = new Player()
var background = new Image()

background.src = 'images/backgroundtest.png'
var x = 0

function drawBackground() {
    x--
    if (-1 * x >  background.width - canvas.width) {
      x = 0
    }
    var y = 0
    context.drawImage(background, x, y);
}

function clear() {
  context.clearRect(0, 0, canvas.width, canvas.height)
}

function update() {
  player.update()
}

function render() {
  clear()
  drawBackground()
  player.render()
  drawCatapult(10, 300, 75, 5);
  drawCatapult(460, 300, 75, 5)
}

function tick() {
  update()

  render()

  requestAnimationFrame(tick)
}

tick()
