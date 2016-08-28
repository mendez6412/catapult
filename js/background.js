class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.image = new Image()
    this.image.src = 'images/background.png';
    this.moving = false
    this.direction = false
    this.counter = 0
  }

  update() {
    if (this.moving == true) {
      // Move the backgrounds x value
      if (this.direction) {
        this.x++
      } else {
        this.x--
      }
    // if (-1 * this.x >  this.image.width - canvas.width) {
    //   this.x = 0;
    // }

    if (playerOneTurn) {
      if (projectile1.isCollidedWith(catapult1)) {
        catapult1.hit(this.damage);
        console.log("Hit catapult1! Health: " + catapult1.health);
      }
    } else {
      if (projectile2.isCollidedWith(catapult2)) {
        catapult2.hit(this.damage);
        console.log("Hit catapult2! Health: " + catapult2.health);
      }
    }

      // Stop the background from moving and switch direction
      this.y = 0;
      if (this.x == -(this.image.width - canvas.width)) {
        this.direction = true;
        this.moving = false;
      };
      if (this.x == 0) {
        this.direction = false;
        this.moving = false;
      };
    }

    this.y = 0;
    if (projectile1.y == 325 && projectile1.id == 1) {
      projectile1.counter++
      if (projectile1.counter > 40) {
        projectile1.counter = 0
        this.direction = true;
        this.moving = false;
        playerOneTurn = false; // Switch player to player 2
      }
    }
    if (projectile1.y == 325 && projectile1.id == 2) {
      projectile2.counter++
        if (projectile2.counter > 40) {
          projectile2.counter = 0
          this.direction = true;
          this.moving = false;
          playerOneTurn = false; // Switch player to player 2
        }
    }
    if (this.x == -(this.image.width - canvas.width)) {
      this.direction = true;
      this.moving = false;
      playerOneTurn = false; // Switch player to player 2
    };
    if (this.x == 0) {
      this.direction = false;
      this.moving = false;
      playerOneTurn = true;
      // reset projectiles to original positions
      projectile1.x = 85
      projectile1.y = 250
      // FIX PROJECTILE VELOCITY RESET
      // projectile1.velocity =  {x: 50, y: -40}
      var velocity_x = power.value * Math.cos(angle.value * (Math.PI/180))
      var velocity_y = power.value * Math.sin(angle.value * (Math.PI/180))
      projectile1.velocity = {x: velocity_x, y: velocity_y}
      projectile2.x = 1630 - 85
      projectile2.y = 250
      // projectile2.velocity = {x: 50, y: -40}
      var velocity_x = power.value * Math.cos(angle.value * (Math.PI/180))
      var velocity_y = power.value * Math.sin(angle.value * (Math.PI/180))
      projectile2.velocity = {x: velocity_x, y: velocity_y}
    };
  }


  render() {
    // context.drawImage(this.image, this.x, this.y);
    context.drawImage(this.image, this.x - camera.xView, this.y - camera.yView);

  }
}
