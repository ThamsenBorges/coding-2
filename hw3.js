class Shape {
    constructor() {
        this.rgb = [random(255),random(255),random(255)];
        this.shape = random([square,circle])
        this.shapeArgs = [random(15,370),random(15,370),random(25)]
        this.drawCallback = function () {
            fill.apply(null, this.rgb);
            this.shape.apply(null,this.shapeArgs)
        }
    }
}
shapes=[]
function setup() {
    createCanvas(400, 400)
    textSize(15);
    textAlign(CENTER);
    for (var i = 0;i<6;i++) {
        shapes.push(new Shape());
    }
}

function drawFrame() {
    background(240);
    rect(15,15,370,370);
    text(frameCount,30,398);
    text('Geometry Rain',62,12);
    text('By:Thamsen Borges',320,398)
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
    if (frameCount % 1000 === 0) {
        for (var i = 0;i<shapes.length;i++) {
            shapes[i] = new Shape();
        }
    }
    drawFrame()
    drawSkyScrapers();
    drawRain()
    for (var shape of shapes) {
      shape.drawCallback();
    }
    pop()
}
function drawRain() {
    stroke(127,127,150) 
    for (var i=0;i<160;i++) {
        var x = random(15,370)
        var y = random(15,370)
        line(x,y,x-1,y-3)       
    }


}