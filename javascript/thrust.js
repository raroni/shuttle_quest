function Thrust() {
  Voy.Component.call(this, 'thrust');
  this.booster = false;
  this.direction = Voy.Vector2.zero();
}

Thrust.prototype = Object.create(Voy.Component.prototype);

Thrust.prototype.initialize = function() {
  this.rigidBody = this.entity.rigidBody;
};

Thrust.prototype.update = function() {
  var force = this.direction.clone();
  force.multiply(this.rigidBody.maxForce);
  if(!this.boosterOn) force.multiply(0.4);
  this.rigidBody.force.add(force);
};
