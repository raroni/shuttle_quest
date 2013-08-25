function ReadyTextLayer() {
  Voy.Layer.call(this, 'ReadyText');
}

ReadyTextLayer.prototype = Object.create(Voy.Layer.prototype);

ReadyTextLayer.prototype.initialize = function() {
  this.scene = this.getScene();
  this.secondsLeft = this.scene.timer.getSeconds();
}

ReadyTextLayer.prototype.draw = function(canvas) {
  canvas.text.color = '#fff';
  canvas.text.setAlign('center');
  canvas.text.setFont('30px verdana');
  var position = new Voy.Point(0, -70);
  canvas.text.draw("Level " + this.scene.levelNumber, position);

  canvas.text.color = '#fff';
  canvas.text.setAlign('center');
  canvas.text.setFont('italic 64px verdana');
  canvas.text.draw(this.scene.levelName);
  
  canvas.text.color = '#fff';
  canvas.text.setAlign('center');
  canvas.text.setFont('italic 30px verdana');

  position = new Voy.Point(0, 50);
  canvas.text.draw("You have " + this.secondsLeft + " seconds.", position);
  position = new Voy.Point(0, 250);
  canvas.text.draw("Press any key to start!", position);
};
