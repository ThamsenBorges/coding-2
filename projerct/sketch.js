var sprite1, sprite2, sprite3, sprite4, sprite5, sprite6, scene1, scene2, scene3, currentScene;

function setup() {
  createCanvas(800,800)
  sprite1 = createSprite(width/2,height/2,10,10)
  sprite2 = createSprite(width/3,height/3,20,20)
  sprite3 = createSprite(width/5,height/5,40,40)
  sprite4 = createSprite(width/6,height/6,20,20)
  sprite5 = createSprite(width/7,height/7,30,30)
  sprite6 = createSprite(50,50,50,50)
  scene1 = new Group()
  scene2 = new Group()
  scene3 = new Group()
  scene1.add(sprite1)
  scene1.add(sprite2)
  scene2.add(sprite3)
  scene2.add(sprite4)
  scene3.add(sprite5)
  scene3.add(sprite6)
}
function draw() {
  background(0,0,0)
  if (frameCount%300 === 0) {
    currentScene = random([scene1,scene2,scene3])
  } 
  drawSprites(currentScene)
}
