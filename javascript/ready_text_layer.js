function ReadyTextLayer() {
  Voy.Layer.call(this, 'ReadyText');
}

ReadyTextLayer.prototype = Object.create(Voy.Layer.prototype);

ReadyTextLayer.prototype.initialize = function() {
  this.secondsLeft = this.getScene().timer.getSeconds();
}

ReadyTextLayer.prototype.draw = function(canvas) {
  canvas.text.color = '#fff';
  canvas.text.setAlign('center');
  canvas.text.setFont('italic 64px verdana');
  canvas.text.draw("You've got " + this.secondsLeft + " seconds.");

  canvas.text.color = '#fff';
  canvas.text.setAlign('center');
  canvas.text.setFont('italic 30px verdana');
  var position = new Voy.Point(0, 50);
  canvas.text.draw("Press any key to start!", position);
};
