class Projectile extends Entity {
    constructor(options) {
        super(options);
        this.radius = options.radius;
        this.color = options.color;
        this.startingPoint = options.x;
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
        // super.update()
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
