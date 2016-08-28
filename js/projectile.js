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

    }

  render() {
    this.drawCircle(this.x - camera.xView, this.y - camera.yView, this.radius, this.color);
  }

    update() {

        if (background.moving && this.y < 296) {
          super.update()
        }
        this.enforceBoundaries()
    }

    enforceBoundaries() {
      if (this.x > canvas.width) {
        this.x = canvas.width
      }

      if (this.y > canvas.height) {
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
