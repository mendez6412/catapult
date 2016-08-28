var canvas = document.querySelector("#myCanvas");
var context = canvas.getContext("2d");
var background = new Background();
var playerOneTurn = true;
// var player = new Player();
var options1 = {
    x: 195,
    y: 310,
    width: 75,
    height: 5
}
var options2 = {
    x: 1610 - 290,
    y: 310,
    width: 75,
    height: 5
}
var catapult1 = new Catapult(options1, 1);
var catapult2 = new Catapult(options2, 2);

var projectile1 = new Projectile({x: 275, y: 250, radius: 7, color: "#F00", id: 1});
var projectile2 = new Projectile({x: 1590 - 275, y: 250, radius: 7, color: "#00F", id: 2});
var camera = new Camera(0, 0, canvas.width, canvas.height, background.width, background.height);

var entities = [
  background, camera, projectile1, projectile2, catapult1, catapult2
];


var FPS = 30;
var INTERVAL = 1000/FPS; // milliseconds
var STEP = INTERVAL/1000 // seconds


window.addEventListener("mouseup", function(e) {
  background.moving = true;
})

function clear() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function update() {
  if (playerOneTurn) {
    if (!background.moving) {
      camera.follow(projectile1, 0, 0);
    } else {
      camera.follow(projectile1, canvas.width/2, canvas.height/2);
    }
  } else {
    camera.follow(projectile2, canvas.width/2, canvas.height/2)
  }


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
