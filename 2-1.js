function setup() {
    createCanvas(400, 400)
    frameRate(1);
    textSize(15);
    textAlign(CENTER);
}

function drawFrame() {
    background(240);
    rect(15,15,370,370);
    text(frameCount,15,398);
    text('Overthinking Rain',73,12);
    text('By:Thamsen Borges',318,397)
}
function drawSkyScrapers() {
    fill(140)
    rect(60,150,60,235)
    fill(110)
    rect(180,120,40,265)
    fill(160)
    rect(270,170,80,215)
}
function draw() {
    push()
    drawFrame()
    drawSkyScrapers();
    drawRain()
    drawShapes();
    pop()
}
function drawShapes() {
    shapeList=["rectangle", "circle", "triangle", "square"]
    for (var i = 0; i<9;i++) {
        drawShape(random(shapeList))
    }
}
function drawShape(shape) {
    var randomPositions=[0,0]
    for (var i=0;i<randomPositions.length;i++) {
        randomPositions[i]=random(15,370)
    }
    var randomSizes = [random(25),random(25), random(25), random(25)]
    switch(shape) {
        case 'rectangle':
        fill(random(255),random(255),random(255))
        rect(randomPositions[0],randomPositions[1], randomSizes[0],randomSizes[1])
        break;
        case 'circle':
        fill(random(255),random(255),random(255))
        circle(randomPositions[0],randomPositions[1],randomSizes[0])
        break;
        case 'triangle':
        fill(random(255),random(255),random(255))
        triangle(randomPositions[0],randomPositions[1],randomPositions[0]+randomSizes[0],randomPositions[1]+randomSizes[1],randomPositions[0]+randomSizes[2],randomPositions[1]+randomSizes[2])
        break;
    }
}

function drawRain() {
    stroke(127,127,150) 
    for (var i=0;i<160;i++) {
        var x = random(15,370)
        var y = random(15,370)
        line(x,y,x-1,y-3)       
    }


}