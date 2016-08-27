class Projectile extends Entity {
    constructor(options) {
        super(options);
        this.radius = options.radius;
        this.color = options.color;
        this.startingPoint = options.x;
        this.velocity = {
          x: 20,
          y: -20
        }

    }

    render() {
        this.drawCircle(this.x, this.y, this.radius, this.color);
    }

    update() {
        // this.drawCircle(this.x, this.y, this.radius, this.color);
        // if (this.x < 460) {
        //     this.x += 5;
        // } else {
        //     this.reset();
        // }
        this.enforceBoundaries()
        if (background.moving) {
          super.update()
        }
    }

    enforceBoundaries() {
      if (this.x > canvas.width) {
        this.x = canvas.width
      }

      if (this.x < 0) {
        this.x = 0
      }

      if (this.y > canvas.height) {
        this.y = canvas.height - 30
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
