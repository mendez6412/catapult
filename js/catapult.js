var canvas = document.querySelector("#myCanvas");
var context = canvas.getContext("2d");

function drawCatapult(x, y, width, height) {
    // Base of the catapult
    context.beginPath();
    context.rect(x, y, width, height);
    context.closePath();
    fillContextColor();

    // Arm of the catapult
    drawArm(x, y, width);

    // Add some wheels to our catapult
    drawCircle((x + 10), ((y + height) + 10), 10);
    drawCircle(((x + width) - 10), ((y + height) + 10), 10);
}

function fillContextColor() {
    context.lineWidth = 2;
    context.fillStyle = "#000000";
    context.fill();
    context.stroke();
}

function drawCircle(x, y, radius) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI, true);
    context.closePath();

    context.fillStyle = "#000000";
    context.fill();
}

function drawArm(x, y, width) {
    context.beginPath();
    if (x > (canvas.width / 2)) {
        context.rect(x, y, 5, -50);
    } else {
        context.rect((x + width), y, -5, -50);
    }
    context.closePath();
    fillContextColor();

    // Add a bucket to hold some projectiles
    if (x > (canvas.width/2)) {
        drawBucket(x - 1, y - 60);
    } else {
        drawBucket((x + width) + 1, y - 60);
    }
}

function drawBucket(x, y) {
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
