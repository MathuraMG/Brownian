/*
 * Brownian motion. 
 * 
 * Recording random movement as a continuous line. 
 */

var num = 100;
var range = 20;

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
var a,b;

function setup() {
  createCanvas(640, 360);
  a = new elt();
  b = new elt();
  a.init();
  b.init();
  a.drawLine();
  b.drawLine();


  //frameRate(30);
}

function draw() {

  //background(51);


  //drawLine(b);

}