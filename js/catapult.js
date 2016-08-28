class Catapult extends Entity {
  constructor(options, id) {
    super(options);
    this.startingX = options.x;
    this.startingY = options.y;
    this.id = id
  }

  render() {
    this.drawBase();
    this.drawArm(this.x, this.y);
    this.drawWheel((this.x + 10), ((this.y + this.height) + 10), 10, "#000000");
    this.drawWheel(((this.x + this.width) - 10), ((this.y + this.height) + 10), 10, "#000000");
  }

  update() {
    if (background.x == 0 || !background.moving) {
      this.x = this.startingX;
    } else if (this.id == 1) {
      this.x = background.x;
    } else if (this.id == 2) {
      if (background.moving == true) {
        if (background.direction) {
          this.x++;
        } else {
          this.x--;
        }
      }
    }

    this.x -= camera.xView
    this.y -= camera.yView
  }

  pull() {
    this.drawArm(this.x -= 2, this.y += 2);
  }

  release() {
    this.x = this.startingX;
    this.y = this.startingY;
    this.render();
  }

  drawBase() {
    context.beginPath();
    context.rect(this.x, this.y, this.width, this.height);
    context.closePath();
    this.fillContextColor();
  }

  drawArm(x, y) {
    context.beginPath();
    if (x > (canvas.width / 2)) {
      context.rect(x, y, 5, -50);
    } else {
      context.rect((x + this.width), y, -5, -50);
    }
    context.closePath();
    this.fillContextColor();

    // Add a bucket to hold some projectiles
    if (x > (canvas.width/2)) {
      this.drawBucket(x - 1, y - 60);
    } else {
      this.drawBucket((x + this.width) + 1, y - 60);
    }
  }

  drawBucket(x, y) {
    context.beginPath();
    if (x > (canvas.width / 2)){
      context.arc(x, y, 10, Math.PI / 2, (3 * Math.PI) / 2, true);
    } else {
      context.arc(x, y, 10, (3 * Math.PI) / 2, Math.PI / 2, true);
    }
    context.closePath();

    context.fillStyle = "#000000";
    context.fill();
  }

  drawWheel(x, y, radius, color) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI, true);
    context.closePath();

    context.fillStyle = color;
    context.fill();
  }

  fillContextColor() {
    context.lineWidth = 2;
    context.fillStyle = "#000000";
    context.fill();
    context.stroke();
  }
}
