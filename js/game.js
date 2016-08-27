var canvas = document.querySelector("#myCanvas");
var context = canvas.getContext("2d");
var background = new Background();
var player = new Player();
var catapult1 = new Catapult();
var catapult2 = new Catapult();
var camera = new Camera();

var entities = [
  background, player, camera, catapult1, catapult2
];

function clear() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function update() {
  entities.forEach(entity => entity.update());
}

function render() {
  clear()

  entities.forEach(entity => entity.render());
}

function tick() {
  update()

  render()

  requestAnimationFrame(tick)
}

tick()
