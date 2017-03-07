
var counter = 0;
var ballSpeed = 5;  // how fast the ball moves in x direction
var change = 0;   // use to determine how much the ball shifts in y direction
var ballArray = [];
var hits = 1;

function setup() {
  createCanvas(800, 640);
  frameRate = 120;
}

function draw() {
  background(0);
  fill(255);
  
  for (var i = ballArray.length - 1; i >= 0; i--) {
    ballArray[i]
  };
  ellipse(updateX(), updateY(), 80, 80);
}

function updateY() {
  var y = sin(change) * 500 * change ;
  change += .02;
  if (change > 1.3) { change = - change};
  return y
}

function updateX(){
  counter += ballSpeed;
  if (counter > width || counter < 5 ){
    wallHitEffects();
  }
  return counter
}

function wallHitEffects() {
    ballSpeed = -ballSpeed;
    hits += 1;
    setup();
}

