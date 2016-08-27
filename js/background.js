class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.image = new Image()
    this.image.src = 'images/background.png';
    this.moving = false
    this.direction = false
  }

  update() {
    console.log(this.moving)
    if (this.moving == true) {
      if (this.direction) {
        this.x++
      } else {
        this.x--
      }
      // if (-1 * this.x >  this.image.width - canvas.width) {
      //   this.x = 0;
      // }
      this.y = 0;
      if (this.x == -(this.image.width - canvas.width)) {
        this.direction = true;
        this.moving = false;
        console.log('THIS WAS right')
      };
      if (this.x == 0) {
        this.direction = false;
        this.moving = false;
        console.log('THIS going left')
      };
    }}

  render() {
    context.drawImage(this.image, this.x, this.y);
  }
}
