let noiseMax = 10;
let phase = 0;

function setup() {
  createCanvas(600, 600);
  slider = createSlider(0, noiseMax, 5, 0.01);
}

function draw() {
  background(0);
  translate(width/2, height/2);
  stroke(255);
  noFill();
  let t = 0;
  beginShape();
  noiseMax = slider.value();
  for (let a = 0; a < TWO_PI; a+=0.1) {
    let xOff = map(cos(a+phase), -1, 1, 0, noiseMax)
    let yOff = map(sin(a), -1, 1, 0, noiseMax)
    let r = map(noise(xOff, yOff), 0, 1, 100, 200);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
    t += 0.1
  }
  endShape(CLOSE);
  phase+=0.01;
}
