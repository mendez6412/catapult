var canvas = document.querySelector("#myCanvas");
var context = canvas.getContext("2d");
var background = new Background();
var player = new Player();
var options1 = {
    x: 10,
    y: 300,
    width: 75,
    height: 5
}
var options2 = {
    x: 460,
    y: 300,
    width: 75,
    height: 5
}
var catapult1 = new Catapult(options1);
var catapult2 = new Catapult(options2);
var camera = new Camera();
var projectile = new Projectile({x: 85, y: 240, radius: 7, color: "#DC423F"});

var entities = [
  background, player, camera, projectile, catapult1, catapult2
];

window.addEventListener("mousedown", catapult1.pull(), false);
window.addEventListener("mouseup", catapult1.release(), false);

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
