
/* TO DO
* change the way extra balls are made
* 
*/


var newX = 0;
var ballSpeed = 8;  // how fast the ball moves in x direction
var change = 0;   // use to determine how much the ball shifts in y direction
var hits = 0;
var shapeWidth;
var shapeHeight;
var numBalls = 1; // starts with 1 ball

function setup() {
  createCanvas(600, 800);
  frameRate = 120;
  shapeWidth = 60;
  shapeHeight = 60;
}

function draw() {
  background(0);
//  fill(300, 100, 300);
 // ellipse(updateX(), updateY(), 80, 80);
 drawBalls();
}

function drawBalls() {
  numBalls = hits + 1;
  for (var i = 0; i < numBalls; i++) {
    ellipse(updateX(), updateY(), shapeWidth, shapeHeight);
    fill(50 * i, 200, 50 * (numBalls + i));
  };
}

function updateY() {
  var y = sin(change) * 500 * change  + 100;
  change += .02;
  if (change > 1.3) { change = - change};
  return y
}

function updateX(){
  newX += ballSpeed;
  if (newX > width || newX < 5 ){
    wallHitEffects();
    return newX
  }
  return newX
}

function wallHitEffects() {
  updateBallSpeed();
  hits += 1;
  smushBall();
  if (hits > 10) {
    hits = 1;
    setup();
  }
}

function smushBall() {
  shapeWidth -= 5;
  shapeHeight += 5;
}

function updateBallSpeed(){
  ballSpeed = -1 * ( ballSpeed + .01);
  if (ballSpeed > 40) { ballSpeed = 5}
}

