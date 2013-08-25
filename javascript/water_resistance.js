function WaterResistance() {
  Voy.Component.call(this, 'waterResistance');
  this.active = false;
}

WaterResistance.prototype = Object.create(Voy.Component.prototype);

WaterResistance.prototype.collided = function(collision) {
  if(this.active) return false;
  var entity = collision.getOther(this.entity);
  if(entity.hasTag('tide')) {
    this.active = true;
    this.deactivateDelay = 400;
  }
};

WaterResistance.prototype.update = function(timeDelta) {
  if(this.active) {
    this.deactivateDelay -= timeDelta;
    if(this.deactivateDelay < 0) {
      this.active = false;
    }
  }
}