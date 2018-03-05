function setup() {
  createCanvas(1090, 580);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(425);
  }
   ellipse(mouseX, mouseY, 80, 80);
}