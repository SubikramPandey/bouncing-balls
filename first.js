
/* TO DO
* figure out why its speeding up so much
* change the way extra balls are made
* 
*/

var x = 0;
var xShift = 10;  // how fast the ball moves in x direction
var change = 0;   // use to determine how much the ball shifts in y direction
var hits;
var ballWidth;
var ballHeight;
var numBalls = 1; // starts with 1 ball

function setup() {
  createCanvas(800, 800);
  hits = 0;
  frameRate = 120;
  ballWidth = 100;
  ballHeight = 100;
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
}

function updateY() {
  var y = sin(change) * 500 * change  + 100;
  change += .02;
  if (change > 1.3) { change = - change};
  return y
}

function updateX(){
  x += xShift;
  if (x > width || x < 5 ){
    wallHitEffects();
  }
  return x
}

function wallHitEffects() {
  updateHits();
  updatexShift();
  smushBall();
  numBalls += 1;
}

function updateHits() {
  hits += 1;
  if (hits > 1500) {
    setup();
  }
}

function updatexShift(){
if (xShift > 0) {xShift = 0 - xShift;}
else {xShift = -1 * xShift;}
if (xShift > 4) { xShift = 5}
}

function smushBall() {
  var ajustement = hits;
  if (hits > 10) {ajustement = 10 / hits}
  ballWidth -= ajustement;
  ballHeight += ajustement;
}