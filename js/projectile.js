class Projectile {
    constructor(context, x, y, radius, color) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.startingPoint = x;
    }

    render() {
        this.drawCircle(this.x, this.y, this.radius, this.color);
    }

    update() {
        
    }

    animate() {
        this.drawCircle(this.x, this.y, this.radius, this.color);
        if (this.x < 460) {
            this.x += 5;
        } else {
            this.x -= 5;
        }
    }

    reset() {
        this.x = this.startingPoint;
    }

    drawCircle(x, y, radius, color) {
        this.context.beginPath();
        this.context.arc(x, y, radius, 0, 2 * Math.PI, true);
        this.context.closePath();

        this.context.fillStyle = color;
        this.context.fill();
    }
}
