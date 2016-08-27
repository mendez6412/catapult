class Catapult extends Entity {
    constructor(options) {
        super(options)
    }

    render() {
        this.drawBase();
        this.drawArm();
        this.drawWheel((this.x + 10), ((this.y + this.height) + 10), 10, "#000000");
        this.drawWheel(((this.x + this.width) - 10), ((this.y + this.height) + 10), 10, "#000000");
    }

    update() {
    }

    drawBase() {
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.closePath();
        this.fillContextColor();
    }

    drawArm() {
        context.beginPath();
        if (this.x > (canvas.width / 2)) {
            context.rect(this.x, this.y, 5, -50);
        } else {
            context.rect((this.x + this.width), this.y, -5, -50);
        }
        context.closePath();
        this.fillContextColor();

        // Add a bucket to hold some projectiles
        if (this.x > (canvas.width/2)) {
            this.drawBucket(this.x - 1, this.y - 60);
        } else {
            this.drawBucket((this.x + this.width) + 1, this.y - 60);
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
