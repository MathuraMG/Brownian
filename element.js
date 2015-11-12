function elt() {
  this.ax = [];
  this.ay = [];
  this.init = function() {
    this.ax[0] =-80; //width/2;
    this.ay[0] = height / 2+ random(-range, range);
  }
  this.drawLine = function() {
  num = this.ax.length;
  //print('hello' + ax[num-1] + ' ' + ax.length);
  while (this.ax[num - 1] < width) {
    //print('hello');
    lastXVal = this.ax[(num) - 1];
    lastYVal = this.ay[(num) - 1];
    // Put a new value at the end of the array
    this.ax.push(lastXVal + random(0, range));
    this.ay.push(lastYVal + random(-range, range));
    num = this.ax.length;
    // Constrain all points to the screen
    this.ax[num - 1] = constrain(this.ax[num - 1], 0, width);
    this.ay[num - 1] = constrain(this.ay[num - 1], 0, height);
    // Draw a line connecting the points
    
    num = this.ax.length;
    line(this.ax[num - 1], this.ay[num - 1], this.ax[num - 2], this.ay[num - 2]);
  }
}
}