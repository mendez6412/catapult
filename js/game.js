var canvas = document.querySelector("#myCanvas");
var context = canvas.getContext("2d");
var background = new Background();
// var player = new Player();
var options1 = {
    x: 10,
    y: 310,
    width: 75,
    height: 5
}
var options2 = {
    x: 1650 - 85,
    y: 310,
    width: 75,
    height: 5
}
var catapult1 = new Catapult(options1, 1);
var catapult2 = new Catapult(options2, 2);
console.log(catapult2.x)
var camera = new Camera();
var projectile = new Projectile({x: 85, y: 250, radius: 7, color: "#DC423F"});

var entities = [
  background, camera, projectile, catapult1, catapult2
];

window.addEventListener('keydown', function(e) {
})

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
