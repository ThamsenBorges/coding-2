function setup() {
  createCanvas(400, 400)
  background(240)
  rect(15,15,370,370);
  text('Geometry Rain',15,11);
  text('By:Thamsen Borges',278,397)
  fill(140)
  rect(60,150,60,235);
  fill(110)
  rect(180,120,40,265);
  fill(160)
  rect(270,170,80,215)
  fill(250,0,0)
  circle(90,50,25,100)
  fill(0,0,250)
  triangle(300,100,300,70,290,100)
  fill(15,200,180)
  rect(207,100,20,20);
  fill(0,160,250)
  circle(167,250,20,100);
  fill(250,250,0)
  triangle(20,330,30,350,50,340)
  fill(78,98,150)
  quad(100,150,100,120,70,100,80,80);
  rect(360,363,20,20)
   rain()
}
function rain() {
  stroke(127,127,150) 
  for (var i=0;i<160;i++) {
    var x = random(15,370)
    var y = random(15,370)
    line(x,y,x-1,y-3)       
  }
}