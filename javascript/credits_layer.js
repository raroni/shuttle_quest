function CreditsLayer() {
  Voy.Layer.call(this, 'CreditsLayer');
}

CreditsLayer.prototype = Object.create(Voy.Layer.prototype);

CreditsLayer.prototype.initialize = function() {
  this.image = this.getScene().assets.images['happy_dog.jpg'];
  this.timer = this.getScene().timer;
};

CreditsLayer.prototype.draw = function(canvas) {
  canvas.text.color = 'white';
  canvas.text.setFont('38px verdana');
  canvas.text.setAlign('center');
  var position = new Voy.Point(0, -220);
  canvas.text.draw("Congratulations! You beat the game!", position);

  position = new Voy.Point(0, -160);
  canvas.text.draw("Smile and be happy :-)", position);

  canvas.drawImage(this.image, new Voy.Point(0, 50));

  canvas.text.setFont('20px verdana');
  canvas.text.setAlign('center');
  position = new Voy.Point(0, 262);
  canvas.text.draw("You finished the game with " + this.timer.getSeconds() + " surplus seconds. Can you beat that?", position);

};
