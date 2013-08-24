function Camera(factor) {
  this.factor = factor;
  Voy.Component.call(this, 'input');
  this.keyboard = Voy.Keyboard.getInstance();
}

Camera.prototype = Object.create(Voy.Component.prototype);

Camera.prototype.initialize = function() {
  this.scene = this.getScene();
  this.player = this.scene.findEntityWithTag('player');
};

Camera.prototype.update = function() {
  var displacement = Voy.Vector2.negate(this.player.localPosition);
  displacement.multiply(this.factor);
  var resolution = this.scene.renderer.canvas.resolution;
  var halfResolution = Voy.Vector2.multiply(resolution, 0.5);
  this.entity.localPosition = Voy.Vector2.add(displacement, halfResolution);
};
