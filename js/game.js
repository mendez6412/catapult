var canvas = document.querySelector("#myCanvas");
var context = canvas.getContext("2d");
var player = new Player()

function clear() {
  context.clearRect(0, 0, canvas.width, canvas.height)
}

function update() {
  player.update()
}

function render() {
  clear()
  player.render()
}

function tick() {
  update()

  render()

  requestAnimationFrame(tick)
}

tick()
