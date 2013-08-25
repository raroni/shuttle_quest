function FadingBackgroundLayer() {
  Voy.Layer.call(this, 'fadingBackgroundLayer');
}

FadingBackgroundLayer.prototype = Object.create(Voy.Layer.prototype);

FadingBackgroundLayer.prototype.initialize = function() {
  this.scene = this.getScene();
  this.size = this.scene.renderer.canvas.resolution;
  this.fader = this.entity.fader;
};

FadingBackgroundLayer.prototype.draw = function(canvas) {
  this.opacity = this.fader.current;
  canvas.drawRectangle(Voy.Vector2.zero(), this.size, 'black');
};
