function Thrust() {
  Voy.Component.call(this, 'thrust');
  this.booster = false;
  this.direction = Voy.Vector2.zero();
}

Thrust.prototype = Object.create(Voy.Component.prototype);

Thrust.prototype.initialize = function() {
  this.rigidBody = this.entity.rigidBody;
  this.waterResistance = this.entity.waterResistance;
};

Thrust.prototype.update = function() {
  var force = this.direction.clone();
  force.multiply(this.rigidBody.maxForce);
  if(!this.boosterOn) force.multiply(0.4);
  if(this.waterResistance.active) force.multiply(0.2);
  this.rigidBody.force.add(force);
};
