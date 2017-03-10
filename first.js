
/* TO DO
* Document code
* change the way extra balls are made
*/

var x = 0;
var xShift = 10;  // how fast the ball moves in x direction
var change = 0;   // use to determine how much the ball shifts in y direction
var hits;
var ballWidth;
var ballHeight;
var numBalls; // starts with 1 ball
var maxHits = 2000;

function setup() {
  createCanvas(800, 800);
  hits = 0;
  frameRate = 120;
  ballWidth = 100;
  ballHeight = 100;
  numBalls = 1;
}

function draw() {
  background(0);
  drawBalls();
}

function drawBalls() {
  for (var i = 0; i < numBalls; i++) {
    ellipse(updateX(), updateY(), ballWidth, ballHeight);
    fill(50 * i, 200, 50 * (numBalls + i));
  };
  if (hits > maxHits) {setup();}
}

function updateY() {
  var y = sin(change) * 500 * change  + 100;
  change += .02;
  if (change > 1.3) { change = - change};
  return y
}

function updateX(){
  x += xShift;
  if (hitWall() ) {wallHitEffects();}
  return x
}

function hitWall() {
  if (x > width || x < 5) { return true}
  else {return false}
}

function wallHitEffects() {
  hits++
  numBalls++;
  updatexShift();
  smushBall();
}

function updatexShift(){
  xShift = -1 * xShift;
  if (xShift > 4) {xShift = 5}
}

function smushBall() {
  var ajustmentFactor = calcAdjustment();
  ballWidth -= ajustmentFactor;
  ballHeight += ajustmentFactor;
}

function calcAdjustment() {
  var adjustment = hits;
  if (hits > 10) {adjustment = 10 / hits}
  return adjustment
}