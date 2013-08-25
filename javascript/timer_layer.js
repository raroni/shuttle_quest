function TimerLayer() {
  Voy.Component.call(this, 'timerLayer');
}

TimerLayer.prototype = Object.create(Voy.Component.prototype);

TimerLayer.prototype.initialize = function() {
  this.timer = this.getScene().timer;
};

TimerLayer.prototype.draw = function(canvas) {
  var secondsText = (Math.round(this.timer.milliSeconds/100)/10).toString();
  if(secondsText.length === 1) secondsText += '.0';
  canvas.text.color = 'white';
  canvas.text.setFont('italic 44px verdana');
  canvas.text.setAlign('right');
  canvas.text.draw(secondsText);
};
