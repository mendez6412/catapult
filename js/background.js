class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.image = new Image()
    this.image.src = 'images/background.png';
  }

  update() {
    this.x--;
    if (-1 * this.x >  this.image.width - canvas.width) {
      this.x = 0;
    }
    this.y = 0;
  }

  render() {
    context.drawImage(this.image, this.x, this.y);
  }
}
