class Projectile extends Entity {
    constructor(options) {
        super(options);
        this.radius = options.radius;
        this.color = options.color;
        this.startingPoint = options.x;
        this.velocity = {
          x: 30,
          y: -20

        }
        this.id = options.id
    }

  render() {
    this.drawCircle(this.x, this.y, this.radius, this.color);
    // this.drawCircle(this.x - camera.xView, this.y - camera.yView, this.radius, this.color);

  }


    update() {
      if (playerOneTurn && this.id == 1) {
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
    this.x = this.startingPoint;
  }

  drawCircle(x, y, radius, color) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI, true);
    context.closePath();

    context.fillStyle = color;
    context.fill();
  }
}
