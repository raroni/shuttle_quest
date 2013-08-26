function Rotation() {
  Voy.Component.call(this, 'rotation');
}

Rotation.prototype = Object.create(Voy.Component.prototype);

Rotation.prototype.update = function(timeDelta) {
  this.entity.localRotation += timeDelta*0.005;
};
