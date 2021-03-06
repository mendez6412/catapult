class Entity {
  constructor(options) {
    if (typeof options != 'object') {
      options = {}
    }
    this.x = options.x || 0
    this.y = options.y || 0
    this.width = options.width || 0
    this.height = options.height || 0
    this.velocity = {
      x: options.velocity ? (options.velocity.x || 0) : 0,
      y: options.velocity ? (options.velocity.y || 0) : 0
    }
    this.acceleration = {
      x: options.acceleration ? (options.acceleration.x || 0) : 0,
      y: options.acceleration ? (options.acceleration.y || 0) : 0
    }
    // Can't really have an x gravity but might simplify some things
    this.gravity = {
      x: options.gravity ? (options.gravity.x || 0) : 0,
      y: options.gravity ? (options.gravity.y || 0) : 5
    }
    this.friction = {
      x: options.friction ? (options.friction.x || 0) : 1,
      y: options.friction ? (options.friction.y || 0) : 0
    }
  }
  update() {
    if (playerOneTurn) {
      if (this.velocity.x > 0) {
        this.velocity.x += this.acceleration.x + this.gravity.x - this.friction.x
        this.x += this.velocity.x
      }
      this.velocity.y += this.acceleration.y + this.gravity.y
      this.y += this.velocity.y
    } else {
      // FOR PLAYER 2, BALL MUST MOVE TO THE LEFT
      if (this.velocity.x > 0) {
        this.velocity.x += this.acceleration.x + this.gravity.x - this.friction.x
        this.x -= this.velocity.x
      }
      this.velocity.y += this.acceleration.y + this.gravity.y
      this.y += this.velocity.y
    }
  }
  render() {}

  isCollidedWith(entity) {
    return !(this.x > (entity.x + entity.width) ||
      (this.x + this.width) < entity.x ||
      this.y > (entity.y + entity.height) ||
      (this.y + this.height) < entity.y);
  }
}
