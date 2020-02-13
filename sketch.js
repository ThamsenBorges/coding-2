class Player {
    constructor(x,y) {
    this.x = x;
    this.y = y;
    this.frameCounter = 0;
    this.currentAnimation = this.idle;
    this.runFrames = [];
    this.idleFrames = [];
    this.attackFrames = [];
      this.idle = function () {
        image(this.idleFrames[this.frameCounter],this.x,this.y)
        if (this.frameCounter === 9) {
          this.frameCounter = 0
        }
        this.frameCounter++;
    }
    this.run = function () {
        image(this.runFrames[this.frameCounter],this.x,this.y)
        if (this.frameCounter === 7) {
          this.frameCounter = 0
        }
        this.frameCounter++;
    }
    this.attack = function () {
        image(this.attackFrames[this.frameCounter],this.x,this.y)
        if (this.frameCounter === 2) {
          this.frameCounter = 0
        }
        this.frameCounter++;
    }
    }
}
const player=new Player(0,0)
var playingAnimation = false;
function setup() {
    frameRate(15)
  createCanvas(641, 542)
    for (var i=0;i<10;i++) {
    player.idleFrames[i] = loadImage('assets/Idle ('+(i+1)+').png');
  }
    for (var i=0;i<3;i++) {
    player.attackFrames[i] = loadImage('assets/Shoot ('+(i+1)+').png');
  }
    for (var i=0;i<8;i++) {
    player.runFrames[i] = loadImage('assets/Run ('+(i+1)+').png');
  }
  player.currentAnimation=player.idle
}

function draw() {
    background(120);
    if (keyIsDown(LEFT_ARROW)) {
        player.x-=5
        if (playingAnimation===false) {
          playingAnimation = true
          player.frameCounter = 0
          player.currentAnimation = player.run
        }
    } 
    else if (keyIsDown(RIGHT_ARROW)) {
        player.x += 5
        if (playingAnimation===false) {
          playingAnimation = true
          player.frameCounter = 0
          player.currentAnimation = player.run
        }
    }
    else if (keyIsDown(UP_ARROW)){
        player.y -= 5
        if (playingAnimation===false) {
          playingAnimation = true
          player.frameCounter = 0
          player.currentAnimation = player.run
        }
    }
     else if (keyIsDown(DOWN_ARROW)){
        player.y += 5
        if (playingAnimation===false) {
          playingAnimation = true
          player.frameCounter = 0
          player.currentAnimation = player.run
        }
     }
     
    else if (keyIsDown(32)) {
      if (playingAnimation===false) {
        player.frameCounter = 0
        playingAnimation=true
        player.currentAnimation = player.attack
      }
      }
    else {
        playingAnimation = false
        player.currentAnimation = player.idle
           }
    player.currentAnimation();
}