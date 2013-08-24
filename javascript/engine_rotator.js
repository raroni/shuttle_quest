function EngineRotator() {
  Voy.Component.call(this, 'engineRotator');
}

EngineRotator.prototype = Object.create(Voy.Component.prototype);

EngineRotator.prototype.update = function(timeDelta) {
  var rigidBody = this.entity.parent.rigidBody;
  var force = rigidBody.force.clone();
  var velocity = rigidBody.velocity;
  if(velocity[0] < 0) force[0] *= -1;
  if(force.getLengthSquared() > 0.00000001) {
    var ideal = Math.atan2(force[1], force[0]);
    var difference = ideal-this.entity.localRotation;
    this.entity.localRotation += difference*0.005*timeDelta;
  }
};
