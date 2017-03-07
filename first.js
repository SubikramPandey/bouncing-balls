var FR = 40;
var counter = 0;
var ballSpeed = 5;
var change = 0;
var ballArray = [];
var hits = 1;

function setup() {
  createCanvas(640, 480);
  frameRate = FR;
}

function draw() {
  background(0);
  if (mouseIsPressed) {setup();}
  fill(255);
  
  for (var i = ballArray.length - 1; i >= 0; i--) {
    ballArray[i]
  };
  ellipse(updateX(), updateY(), 80, 80);
}


function updateX(){
  counter += ballSpeed;
  if (counter > width || counter < 5 ){
    ballSpeed = -ballSpeed;
    setup();
  }
  return counter
}

function updateY() {
  var y = sin(change) * 500 * change ;
  change += .02;
  if (change > 1) { change = - change};
  return y
}