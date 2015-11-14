/*
 * Brownian motion. 
 * 
 * Recording random movement as a continuous line. 
 */

var vol = [];
var totNotes = 3;



var num = 100;
var range = 20;
var numLines = 100;
var notes = [];

var ax = [];
var ay = [];
var ctx;
// var a = {
//   ax: [],
//   ay: []
// };
// var b = {
//   ax: [],
//   ay: []
// };
var lines1, lines2, lines3, lines4; // = [];
var lines = [];

function preload() {
  notes = [loadSound('assets/bass.mp3'), loadSound('assets/drums.mp3'), loadSound('assets/piano.mp3')];
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  blendMode(LIGHTEST);
  background(0);

  //frameRate(30);
  l = new elt();

  l.init();
  strokeWeight(0);
  l.drawLine();
  lines[0] = l;

  // l = new elt();
  // lines4 = l;
  // l.init();
  // strokeWeight(0.5);
  // stroke(0, 0, 0, 50);
  // l.drawLine();
  //curvesBW(lines3,lines1);
  //curvesBW(lines4,lines1);
  ctx = canvas.getContext('2d');


  for (var i = 0; i < totNotes; i++) {
    vol[i] = 0;
    notes[i].loop();
    notes[i].setVolume(0);
  }

}

function draw() {

  countPixels();
  //randomNoise();
  //curves();
  if (frameCount <= 500) {
    //print(frameCount);
    if ((frameCount - 1) % numLines == 0) {
      l = new elt();

      l.init();
      strokeWeight(0);

      l.drawLine();

      lines[((frameCount - 1) / numLines) + 1] = l;


    } else {
      a = floor(((frameCount - 1) / numLines));
      curvesBW(lines[a], lines[a + 1], (frameCount - 1) % numLines);
    }
  }


}



function curvesBW(lines1, lines2, i) {
  //for (var i = 0; i < 50; i++) {
  l = new elt();
  l.init();
  colorMode(HSB);
  stroke(abs((frameCount % 130) - 65), 100, 100, 50);
  for (var a = 1; a < lines2.ax.length; a++) {

    l.ax[a] = lines1.ax[a] + ((lines2.ax[a] - lines1.ax[a]) / numLines) * i;
    l.ay[a] = lines1.ay[a] + ((lines2.ay[a] - lines1.ay[a]) / numLines) * i;
    l.lax[a] = lines1.lax[a] + ((lines2.lax[a] - lines1.lax[a]) / numLines) * i;
    l.lay[a] = lines1.lay[a] + ((lines2.lay[a] - lines1.lay[a]) / numLines) * i;
    strokeWeight(0.5);

    noFill();
    line(l.ax[a], l.ay[a], l.ax[a - 1], l.ay[a - 1]);
    line(l.lax[a], l.lay[a], l.lax[a - 1], l.lay[a - 1]);
    //arc(l.ax[a], l.ay[a], dist(l.ax[a - 1], l.ay[a - 1],l.ax[a], l.ay[a]), random(5,10),random(0,0.5), random(0.5,1));
    //}
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
        colourMode(HSB);
        stroke(random(200, 255), 100, 100, 70);
        noFill();
        line(l.ax[a], l.ay[a], l.ax[a - 1], l.ay[a - 1]);
        //arc(l.ax[a], l.ay[a], dist(l.ax[a - 1], l.ay[a - 1],l.ax[a], l.ay[a]), random(5,10),random(0,0.5), random(0.5,1));
      }
      lines = l;




    }
    //drawLine(b);

  }
}


/***********************************************
 * MUSIC RELATED *
 ***********************************************/

function countPixels() {
  countPixel = 0;
  imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  for (var i = 0; i < windowWidth; i = i + 10) {
    for (var j = 0; j < windowHeight; j = j + 10) {

      colour = getPixelXY(imgData, i, j)[0];
      if (colour == 0) {

      } else {
        countPixel++;
      }




    }
  }
  print(countPixel);
  if (countPixel < 1500) {
    if (countPixel > 1000 && countPixel < 1500) {
      notes[2].amp((countPixel - 1000) / 1000);
    } else if (countPixel > 500&& countPixel < 1000) {
      notes[1].amp((countPixel - 500) / 1000);
    } else if (countPixel > 0&& countPixel < 500) {
      notes[0].amp((countPixel - 0) / 1000);
    }
  }
}

function getPixel(imgData, index) {
  var i = index * 4,
    d = imgData.data;
  return [d[i], d[i + 1], d[i + 2], d[i + 3]] // returns array [R,G,B,A]
}

function getPixelXY(imgData, x, y) {
  return getPixel(imgData, y * imgData.width + x);
}