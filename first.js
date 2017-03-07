
var newX = 0;
var ballSpeed = 7;  // how fast the ball moves in x direction
var change = 0;   // use to determine how much the ball shifts in y direction
var ballArray = [];
var hits = 1;

function setup() {
  createCanvas(600, 640);
  frameRate = 120;
 // var mySound = loadSound('assets/turndown.mp3');
//  mySound.setVolume(1);
// mySound.play();
}

function draw() {
  background(0);
//  fill(300, 100, 300);
 // ellipse(updateX(), updateY(), 80, 80);
 drawBalls();
}

function drawBalls() {
  for (var i = 0; i < hits; i++) {
    ellipse(updateX(), updateY(), 80, 80);
    fill(50 * i ,  100, 50 * (hits + i));
  };
}

function updateY() {
  var y = sin(change) * 500 * change ;
  change += .02;
  if (change > 1.3) { change = - change};
  return y
}

function updateX(){
  newX += ballSpeed;
  if (newX > width || newX < 5 ){
    wallHitEffects();
    return newX += ballSpeed
  }
  return newX
}

function wallHitEffects() {
  updateBallSpeed();
  hits += 1;
  if (hits > 10) {
    hits = 1;
    setup();
  }
}

function updateBallSpeed(){
  ballSpeed = -1 * ( ballSpeed + .6);
  if (ballSpeed > 40) { ballSpeed = 5}
}

