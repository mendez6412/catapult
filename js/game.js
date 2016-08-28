var canvas = document.querySelector("#myCanvas");
var context = canvas.getContext("2d");
var background = new Background();
var playerOneTurn = true;

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
var camera = new Camera();
var projectile1 = new Projectile({x: 85, y: 250, radius: 7, color: "#F00", id: 1});
var projectile2 = new Projectile({x: 1630 - 85, y: 250, radius: 7, color: "#00F", id: 2});

var entities = [
  background, camera, projectile1, projectile2, catapult1, catapult2
];

window.addEventListener("mouseup", function(e) {
  background.moving = true;
})

window.addEventListener("keydown", function(e) {
  catapult1.pull();
});

window.addEventListener("keyup", function(e) {
  catapult1.release();
});

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
