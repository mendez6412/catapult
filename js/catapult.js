class Catapult {
    constructor(canvas, context, x, y, width, height) {
        this.canvas = canvas;
        this.context = context;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
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
        this.context.beginPath();
        this.context.rect(this.x, this.y, this.width, this.height);
        this.context.closePath();
        this.fillContextColor();
    }

    drawArm() {
        this.context.beginPath();
        if (this.x > (this.canvas.width / 2)) {
            this.context.rect(this.x, this.y, 5, -50);
        } else {
            this.context.rect((this.x + this.width), this.y, -5, -50);
        }
        this.context.closePath();
        this.fillContextColor();

        // Add a bucket to hold some projectiles
        if (this.x > (this.canvas.width/2)) {
            this.drawBucket(this.x - 1, this.y - 60);
        } else {
            this.drawBucket((this.x + this.width) + 1, this.y - 60);
        }
    }

    drawBucket(x, y) {
        this.context.beginPath();
        if (x > (this.canvas.width / 2)){
            this.context.arc(x, y, 10, Math.PI / 2, (3 * Math.PI) / 2, true);
        } else {
            this.context.arc(x, y, 10, (3 * Math.PI) / 2, Math.PI / 2, true);
        }
        this.context.closePath();

        this.context.fillStyle = "#000000";
        this.context.fill();
    }

    drawWheel(x, y, radius, color) {
        this.context.beginPath();
        this.context.arc(x, y, radius, 0, 2 * Math.PI, true);
        this.context.closePath();

        this.context.fillStyle = color;
        this.context.fill();
    }

    fillContextColor() {
        this.context.lineWidth = 2;
        this.context.fillStyle = "#000000";
        this.context.fill();
        this.context.stroke();
    }
}
