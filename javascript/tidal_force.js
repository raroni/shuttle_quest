function TidalForce(speed) {
  Voy.Component.call(this, 'tidalForce');
  this.speed = speed;
}

TidalForce.prototype = Object.create(Voy.Component.prototype);

TidalForce.prototype.initialize = function() {
  this.scene = this.getScene();
}

TidalForce.prototype.update = function(timeDelta) {
  if(this.speed == 0) return;
  if(this.scene.playing) this.entity.localPosition[1] -= timeDelta*0.05*this.speed;
};
