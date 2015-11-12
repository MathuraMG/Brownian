/*
 * Brownian motion. 
 * 
 * Recording random movement as a continuous line. 
 */

var num = 100;
var range = 10;

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
var lines1, lines2, lines3, lines4; // = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  blendMode(LIGHTEST);


  //frameRate(30);
  l = new elt();
  lines1 = l;
  l.init();
  strokeWeight(0.5);
  stroke(random(200, 255), random(20, 75), random(20, 75), 50);
  l.drawLine();
  l = new elt();
  lines2 = l;
  l.init();

  l.drawLine();
  curvesBW(lines1, lines2);
  l = new elt();
  lines3 = l;
  l.init();

  l.drawLine();
  curvesBW(lines2, lines3);
  l = new elt();
  lines4 = l;
  l.init();

  l.drawLine();
  curvesBW(lines4, lines3);
  // l = new elt();
  // lines4 = l;
  // l.init();
  // strokeWeight(0.5);
  // stroke(0, 0, 0, 50);
  // l.drawLine();
  //curvesBW(lines3,lines1);
  //curvesBW(lines4,lines1);

}

function draw() {

  //randomNoise();
  //curves();



}

function curves() {
  if (frameCount < 1000) {
    //background(51);
    if (frameCount % 1 == 0) {
      l = new elt();
      l.init();
      for (var a = 1; a < lines.ax.length; a++) {
        l.ax[a] = lines.ax[a] + random(-3, 3);
        l.ay[a] = lines.ay[a] + random(-3, 3);
        strokeWeight(0.1);
        stroke(random(200, 255), random(20, 75), random(20, 75), 50);
        noFill();
        line(l.ax[a], l.ay[a], l.ax[a - 1], l.ay[a - 1]);
        //arc(l.ax[a], l.ay[a], dist(l.ax[a - 1], l.ay[a - 1],l.ax[a], l.ay[a]), random(5,10),random(0,0.5), random(0.5,1));
      }
      lines = l;




    }
    //drawLine(b);

  }
}

function curvesBW(lines1, lines2) {
  for (var i = 0; i < 50; i++) {
    l = new elt();
    l.init();
    for (var a = 1; a < lines2.ax.length; a++) {

      l.ax[a] = lines1.ax[a] + ((lines2.ax[a] - lines1.ax[a]) / 50) * i;
      l.ay[a] = lines1.ay[a] + ((lines2.ay[a] - lines1.ay[a]) / 50) * i;
      strokeWeight(0.5);
      stroke(random(200, 255), random(20, 75), random(20, 75), 50);
      noFill();
      line(l.ax[a], l.ay[a], l.ax[a - 1], l.ay[a - 1]);
      //arc(l.ax[a], l.ay[a], dist(l.ax[a - 1], l.ay[a - 1],l.ax[a], l.ay[a]), random(5,10),random(0,0.5), random(0.5,1));
    }
    //lines = l;

  }


}

function randomNoise() {
  if (frameCount < 1000) {
    //background(51);
    if (frameCount % 1 == 0) {
      l = new elt();
      lines = l;
      l.init();
      strokeWeight(0.5);
      stroke(random(200, 255), random(20, 75), random(20, 75), 50);
      l.drawLine();



    }
    //drawLine(b);

  }
}