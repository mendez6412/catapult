class Projectile extends Entity {
    constructor(options) {
        super(options);
        this.radius = options.radius;
        this.color = options.color;
        this.startingX = options.x;
        this.startingY = options.y;
        this.velocity = {
          x: 100,
          y: -50

        }
        this.id = options.id
        this.counter = 0
        this.damage = 50
    }

  render() {
    // this.drawCircle(this.x, this.y, this.radius, this.color);
    this.drawCircle(this.x - camera.xView, this.y - camera.yView, this.radius, this.color);

  }


    update() {
      if (!background.moving) {
        this.reset()
        return
      }

      if (playerOneTurn && this.id == 1) {
        if (this.isCollidedWith(catapult1)) {
          catapult1.hit(this.damage);
          console.log("Hit catapult1! Health: " + catapult1.health);
        }

        if (background.moving && this.y < 296) {
          super.update()

        } else if (background.moving && !background.direction) {
          this.x--
          projectile2.x--
        } else if (background.moving && background.direction) {
          // this.x++
          // projectile2.x++
        }

      } else if (playerOneTurn == false && this.id == 2) {
        if (this.isCollidedWith(catapult2)) {
          catapult2.hit(this.damage);
          console.log("Hit catapult2! Health: " + catapult2.health);
        }

        if (background.moving && this.y < 296) {
          super.update()
        } else if (background.moving && !background.direction) {
          // this.x--
          // projectile1.x--
        } else if (background.moving && background.direction) {
          this.x++
          projectile1.x++
        }
      }
      this.enforceBoundaries()
    }

    enforceBoundaries() {
      if (this.y > canvas.height - 25) {
        this.y = canvas.height - 25
      }
    }

  reset() {
    this.x = this.startingX;
    this.y = this.startingY;
  }

  drawCircle(x, y, radius, color) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI, true);
    context.closePath();

    context.fillStyle = color;
    context.fill();
  }

}
