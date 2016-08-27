class Player extends Entity {
  constructor() {
    var options = {
      x: 100,
      y: 30,
      height: 50,
      width: 50,
      gravity: {
        x: 0,
        y: 4
      }
    }
    super(options)
  }

  update() {
    this.enforceBoundaries()
    super.update()
  }

  enforceBoundaries() {
    if (this.x + this.width > canvas.width) {
      this.x = canvas.width - this.width
    }

    if (this.x < 0) {
      this.x = 0
    }

    if (this.y < 0) {
      this.y = 0
    }

    if (this.y + this.height > canvas.height) {
      this.y = canvas.height - this.height
    }
  }

  render() {
    context.fillStyle = 'rgba(0, 0, 255, 1.0)'
    context.fillRect(this.x, this.y, this.width, this.height)
  }
}
