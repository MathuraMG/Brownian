/*
 * Brownian motion. 
 * 
 * Recording random movement as a continuous line. 
 */

var num = 100;
var range = 50;

var ax = [];
var ay = [];

// var a = {
//   ax: [],
//   ay: []
// };
// var b = {
//   ax: [],
//   ay: []
// };
var lines = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  blendMode(LIGHTEST);


  //frameRate(30);
  l = new elt();
  lines = l;
  l.init();
  strokeWeight(0.1);
  stroke(0, 0, 0, 50);
  l.drawLine();

}

function draw() {

  //randomNoise();
  curves();


}

function curves() {
  if (frameCount < 1000) {
    //background(51);
    if (frameCount % 1 == 0) {
      l = new elt();
      l.init();
      for (var a = 1; a < lines.ax.length; a++) {
        l.ax[a] = lines.ax[a] + random(-2, 2);
        l.ay[a] = lines.ay[a] + random(-2, 2);
        strokeWeight(0.1);
        stroke(random(200, 255), random(20, 75), random(20, 75), 50);
        line(l.ax[a], l.ay[a], l.ax[a - 1], l.ay[a - 1]);
      }
      lines = l;




    }
    //drawLine(b);

  }
}

function randomNoise() {
  if (frameCount < 1000) {
    //background(51);
    if (frameCount % 1 == 0) {
      l = new elt();
      lines = l;
      l.init();
      strokeWeight(0.1);
      stroke(random(200, 255), random(20, 75), random(20, 75), 50);
      l.drawLine();



    }
    //drawLine(b);

  }
}