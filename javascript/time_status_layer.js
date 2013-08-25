function TimeStatusLayer() {
  Voy.Layer.call(this, 'timeStatusLayer');
}

TimeStatusLayer.prototype = Object.create(Voy.Layer.prototype);

TimeStatusLayer.prototype.initialize = function() {
  this.timer = this.getScene().timer;
}

TimeStatusLayer.prototype.draw = function(canvas) {
  canvas.text.color = '#fff';
  canvas.text.setAlign('center');
  canvas.text.setFont('30px verdana');
  var position = new Voy.Point(0, 70);
  canvas.text.draw("Seconds left: " + Math.round(this.timer.milliSeconds/100)/10, position);
};
