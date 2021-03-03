var x = 0;
var y = 0;

function setup() {
  createCanvas(800, 600, WEBGL);
}

// display all the frames using the draw function as a loop
function draw() {
  background(120);
  normalMaterial();

  createBox(150, 150, 150, -100, -100, true);
  createTorus();
  createCone(50,150,24,24,true);
  createSphere(150);
  createBox(50, 50, 50, 250, 50, false);
  if (keyIsPressed) {
    if (key == 'd') { // move the right
      x += 2;}

   else if (key == 'a') { // move to the left

      x -= 2;}
    
    else if (key == 'w') { // move up 

      y += 2;}

    else if (key == 's') { // move down 

      y -= 2;}

}
}

// this allows us to create any type of box
function createBox(w, h, d, transX, transY, move) {
  push();
  if (move) {
    translate(transX + x, transY);
  } else {
    translate(transX, transY);
  }
  if (move) {
    translate(x, transY - y);
  } else {
    translate(transX, transY);
  }

  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(w, h, d);
  pop();


}

// this creates a single torus
function createTorus() {
  push();
  translate(100, 100);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(50, 15, 24, 16);
  pop();
  
}
  
// this creates a single cone  

function createCone() {
  push();
  translate(75, -50);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  cone(50, 150, 24, 24,true);
  pop();
  
}

function createSphere() {
  push();
  translate(-125, 125);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  sphere(50);
  pop();
  
}