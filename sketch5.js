var player, dead, idle, jump, melee, shoot, slide, run, obstacleStrings, obstacles

function preload() {
	loadStrings('assets/Dead.txt', function(result) { dead = loadAnimation(...result) })
	loadStrings('assets/Idle.txt', function(result) { idle = loadAnimation(...result) })
	loadStrings('assets/Jump.txt', function(result) { jump = loadAnimation(...result) })
	loadStrings('assets/Melee.txt', function(result) { melee = loadAnimation(...result) })
	loadStrings('assets/Shoot.txt', function(result) { shoot = loadAnimation(...result) })
	loadStrings('assets/Slide.txt', function(result) { slide = loadAnimation(...result) })
	loadStrings('assets/Run.txt', function(result) { run = loadAnimation(...result) })
	loadStrings('assets/Obstacles.txt', function(result) { obstacleStrings = [result[0],result[1]] })
	obstacles=[]
}

function setup() {
	createCanvas(800,600)
	player = createSprite(400,300,605,604)
	player.addAnimation('dead', dead)
	player.addAnimation('idle', idle)
	player.changeAnimation('idle')
	player.addAnimation('jump', jump)
	player.addAnimation('melee', melee)
	player.addAnimation('shoot', shoot)
	player.addAnimation('slide', slide)
	player.addAnimation('run', run)
	for (var i=0;i<obstacleStrings.length;i++) {
		obstacles[i] = createSprite(Math.random()*800,Math.random()*600,20,20)
		obstacles[i].addAnimation('default', obstacleStrings[i])
		obstacles[i].scale=.05
	}
	player.scale=.15
}

function draw() {
	background(50,50,50)
	if (keyDown(' ')) {
		player.changeAnimation('shoot')
	}
	else if (keyDown('x')) {
		player.changeAnimation('melee')
	}
	else if (keyDown('s')) {
		player.position.y+=15
		player.changeAnimation('slide')
	}
	else if (keyDown('w')) {
		player.position.y-=15
		player.changeAnimation('jump')
	}
	else if (keyDown('a')) {
		player.position.x-=15
		player.changeAnimation('run')
	}
	else if (keyDown('d')) {
		player.position.x+=15
		player.changeAnimation('run')
	}
	else {
		player.changeAnimation('idle')
	}
	for (var i=0;i<obstacles.length;i++) {
		obstacles[i].displace(player)
	}
	drawSprites()
}