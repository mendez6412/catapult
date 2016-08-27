function drawCatapult(x, y, width, height) {
    var canvas = document.querySelector("#myCanvas");
    var context = canvas.getContext("2d");

    // Base of the catapult
    context.beginPath();
    context.rect(x, y, width, height);
    context.closePath();
    fillContextColor(context);

    // Arm of the catapult
    context.beginPath();
    if (x > (canvas.width/2)) {
        context.rect(x, y, 5, -50);
    } else {
        context.rect((x + width), y, -5, -50);
    }
    context.closePath();
    fillContextColor(context);
}

function fillContextColor(context) {
    context.lineWidth = 2;
    context.fillStyle = "#000000";
    context.fill();
    context.stroke();
}



drawCatapult(10, 300, 75, 5);
drawCatapult(460, 300, 75, 5);
