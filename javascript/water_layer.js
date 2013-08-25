function WaterLayer() {
  Voy.Layer.call(this, 'waterLayer');
}

WaterLayer.prototype = Object.create(Voy.Layer.prototype);

WaterLayer.prototype.initialize = function() {
  var scene = this.getScene();
  var image = scene.assets.images['water.png'];
  this.context = scene.renderer.canvas.context;
  this.pattern = this.context.createPattern(image, 'repeat');
};

WaterLayer.prototype.draw = function(canvas) {
  this.context.save();
  this.context.translate(-WaterLayer.width/2, -WaterLayer.height/2);
  this.context.rect(0, 0, WaterLayer.width, WaterLayer.height);
  this.context.fillStyle = this.pattern;
  this.context.fill();
  this.context.restore();
};

WaterLayer.width = 4000;
WaterLayer.height = 1120;
