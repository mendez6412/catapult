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
var projectile = new Projectile({x: 85, y: 250, radius: 7, color: "#DC423F"});
var camera = new Camera(0, 0, canvas.width, canvas.height, background.width, background.height);
camera.follow(projectile, canvas.width/2, canvas.height/2);

var entities = [
  background, camera, projectile, catapult1, catapult2
];

var FPS = 30;
var INTERVAL = 1000/FPS; // milliseconds
var STEP = INTERVAL/1000 // seconds


window.addEventListener("mouseup", function(e) {
  background.moving = true;
})

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

// function draw() {
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   player.draw(context, camera.xView, camera.yView);
// }

function tick() {
  update()

  render()

  requestAnimationFrame(tick)
}

tick()
