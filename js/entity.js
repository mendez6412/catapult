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
      y: options.gravity ? (options.gravity.y || 0) : 0
    }
    this.friction = {
      x: options.friction ? (options.friction.x || 0) : 0,
      y: options.friction ? (options.friction.y || 0) : 0
    }
  }
  update() {
    this.x += (this.velocity.x * this.acceleration.x) + this.gravity.x
    this.y += (this.velocity.y * this.acceleration.y) + this.gravity.y
  }
  render() {}
}
