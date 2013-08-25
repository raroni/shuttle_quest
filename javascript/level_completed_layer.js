function LevelCompletedLayer() {
  Voy.Layer.call(this, 'levelCompletedLayer');
}

LevelCompletedLayer.prototype = Object.create(Voy.Layer.prototype);

LevelCompletedLayer.prototype.initialize = function() {
  this.levelNumber = this.getScene().levelNumber;
};

LevelCompletedLayer.prototype.draw = function(canvas) {
  canvas.text.color = '#fff';
  canvas.text.setAlign('center');
  canvas.text.setFont('30px verdana');
  var position = new Voy.Point(0, -70);
  canvas.text.draw("Level " + this.levelNumber + ' completed!');
};
