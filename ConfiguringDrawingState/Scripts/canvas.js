$(document).ready(function () {
    $('#btnClear').on('click', clearCanvas);
    $('#btnColor').on('click', drawUsingCssColor);
    $('#btnGradient').on('click', drawGradient);
    $('#btnPattern').on('click', drawPattern);
    $('#btnLineWidth').on('click', drawLineWidth);
    $('#btnLineJoin').on('click', drawLineJoin);
    $('#btnStrokeStyle').on('click', drawGradientStroke);
    $('#btnSaveRestore').on('click', saveRestore);
});

function clearCanvas() {
    var canvas = document.getElementById('myCanvas')
        , ctx = canvas.getContext('2d');

    ctx.fillStyle = "#000000";
    ctx.strokeStyle = "#000000";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawUsingCssColor() {
    clearCanvas();

    var canvas = document.getElementById('myCanvas')
        , ctx = canvas.getContext('2d')
        , offset = 10
        , size = 50;

    ctx.fillStyle = "red";
    ctx.fillRect(offset + (0 * (offset + size)), offset, size, size);
    ctx.fillRect(offset + (1 * (offset + size)), offset, size, size);

    ctx.fillStyle = "#00FF00";
    ctx.fillRect(offset + (2 * (offset + size)), offset, size, size);
    ctx.fillRect(offset + (3 * (offset + size)), offset, size, size);

    ctx.fillStyle = "rgba(0, 0, 255, 0.25)";
    ctx.fillRect(offset + (4 * (offset + size)), offset, size, size);
    ctx.fillRect(offset + (5 * (offset + size)), offset, size, size);
}

function drawGradient() {
    clearCanvas();

    var canvas = document.getElementById('myCanvas')
        , ctx = canvas.getContext('2d')
        , x0 = 0
        , y0 = 0
        , r0 = 0
        , x1 = 200
        , y1 = 0
        , r1 = 100
        , width = 300
        , height = 50
        , offset = 10;

    gradient = ctx.createLinearGradient(x0, y0, x1, y1);
    addColorStops(gradient);
    ctx.fillStyle = gradient;
    ctx.fillRect(10, 0 * (height + offset), width, height);
    ctx.fillRect(100, 1 * (height + offset), width, height);

    y1 = 300;
    gradient = ctx.createLinearGradient(x0, y0, x1, y1);
    addColorStops(gradient);
    ctx.fillStyle = gradient;
    ctx.fillRect(10, 2 * (height + offset), width, height);
    ctx.fillRect(100, 3 * (height + offset), width, height);

    x0 = x1 = width / 2;
    y0 = y1 = 4 * (height + offset) + (height / 2);
    gradient = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
    addColorStops(gradient);
    ctx.fillStyle = gradient;
    ctx.fillRect(10, 4 * (height + offset), width, height);
    ctx.fillRect(100, 5 * (height + offset), width, height);

    y0 = 5 * (height + offset) + (height / 2);
    y1 = y0 + 100;
    gradient = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
    addColorStops(gradient);
    ctx.fillStyle = gradient;
    ctx.fillRect(10, 6 * (height + offset), width, height);
    ctx.fillRect(100, 7 * (height + offset), width, height);
}

function addColorStops(gradient) {
    gradient.addColorStop("0.00", "magenta");
    gradient.addColorStop("0.25", "blue");
    gradient.addColorStop("0.50", "green");
    gradient.addColorStop("0.75", "yellow");
    gradient.addColorStop("1.00", "red");
}

function drawPattern() {
    clearCanvas();

    var canvas = document.getElementById('myCanvas')
        , ctx = canvas.getContext('2d');

    // create new image object to use as pattern
    var img = new Image();
    img.onload = function () {
        // create pattern
        var ptrn = ctx.createPattern(img, 'repeat');
        ctx.fillStyle = ptrn;
        ctx.fillRect(0, 0, 400, 400);
    }

    //img.src = 'images/GoogleDino.gif';
    img.src = 'images/pattern.gif';
}

function drawLineWidth() {
    clearCanvas();

    var canvas = document.getElementById('myCanvas')
        , ctx = canvas.getContext('2d')
        , offset = 40
        , width = 5
        , height = 5
        , lineWidth = 1
        , i = 0
        , centerX = canvas.width / 2
        , centerY = canvas.height / 2;

    for (i = 1; i < 15; i++) {
        ctx.lineWidth = i;
        ctx.strokeRect(centerX - (width / 2) - (i * offset / 2), centerY - (height / 2) - (i * offset / 2), width + (i * offset), height + (i * offset));
    }
}

function drawLineJoin() {
    clearCanvas();

    var canvas = document.getElementById('myCanvas')
        , ctx = canvas.getContext('2d');

    ctx.lineWidth = 20;
    
    ctx.lineJoin = 'round';
    ctx.strokeRect(20, 20, 50, 50);

    ctx.lineJoin = 'bevel';
    ctx.strokeRect(100, 100, 50, 50);

    ctx.lineJoin = 'miter';
    ctx.strokeRect(180, 180, 50, 50);
}

function drawGradientStroke() {
    clearCanvas();

    var canvas = document.getElementById('myCanvas')
        , ctx = canvas.getContext('2d')
        , x0 = 0
        , y0 = 0
        , r0 = 0
        , x1 = 200
        , y1 = 0
        , r1 = 100
        , width = 300
        , height = 40
        , offset = 25;

    ctx.lineWidth = 15;

    gradient = ctx.createLinearGradient(x0, y0, x1, y1);
    addColorStops(gradient);
    ctx.strokeStyle = gradient;
    ctx.strokeRect(10, 0 * (height + offset), width, height);
    ctx.strokeRect(100, 1 * (height + offset), width, height);

    y1 = 300;

    gradient = ctx.createLinearGradient(x0, y0, x1, y1);
    addColorStops(gradient);
    ctx.strokeStyle = gradient;
    ctx.strokeRect(10, 2 * (height + offset), width, height);
    ctx.strokeRect(100, 3 * (height + offset), width, height);

    x0 = x1 = width / 2;
    y0 = y1 = 4 * (height + offset) + (height / 2);

    gradient = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
    addColorStops(gradient);
    ctx.strokeStyle = gradient;
    ctx.strokeRect(10, 4 * (height + offset), width, height);
    ctx.strokeRect(100, 5 * (height + offset), width, height);

    y0 = 5 * (height + offset) + (height / 2);
    y1 = y0 + 100;

    gradient = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
    addColorStops(gradient);
    ctx.strokeStyle = gradient;
    ctx.strokeRect(10, 6 * (height + offset), width, height);
    ctx.strokeRect(100, 7 * (height + offset), width, height);
}

function saveRestore() {
    clearCanvas();

    var canvas = document.getElementById('myCanvas')
        , ctx = canvas.getContext('2d');

    ctx.lineWidth = 20;
    ctx.strokeStyle = "green";
    ctx.lineJoin = "round";
    ctx.strokeRect(20, 20, 50, 50);

    ctx.save();

    ctx.lineWidth = 10;
    ctx.strokeStyle = "red";
    ctx.lineJoin = "bevel";
    ctx.strokeRect(100, 100, 50, 50);

    ctx.restore();

    ctx.strokeRect(180, 180, 50, 50);
}
