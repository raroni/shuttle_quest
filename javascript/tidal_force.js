function TidalForce(speed) {
  Voy.Component.call(this, 'tidalForce');
  this.speed = speed;
}

TidalForce.prototype = Object.create(Voy.Component.prototype);

TidalForce.prototype.update = function(timeDelta) {
  this.entity.localPosition[1] -= timeDelta*0.05*this.speed;
};
