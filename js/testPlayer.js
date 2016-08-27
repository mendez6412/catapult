class Player extends Entity {
  constructor() {
    var options = {
      x = 100,
      y = 30,
      height = 50,
      width = 50,
      gravity: {
        x: 0,
        y: 4
      }
    }
    super(options)
  }
  render() {
    ctx.fillStyle = 'rgba(0, 0, 255, 1.0)'
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}
