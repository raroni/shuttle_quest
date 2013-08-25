function FlameFlicker() {
  Voy.Component.call(this, 'flameFlicker');
  this.strengthWithoutRandom = 0;
  this.strength = 0;
  this.time = 0;
}

FlameFlicker.prototype = Object.create(Voy.Component.prototype);

FlameFlicker.prototype.initialize = function() {
  this.spaceshipBody = this.entity.parent.parent.rigidBody;
};

FlameFlicker.prototype.update = function(timeDelta) {
  var strengthTarget = this.spaceshipBody.force.getLengthSquared() === 0 ? 0 : 1;
  if(strengthTarget == this.strengthWithoutRandom) return;
  var difference = strengthTarget - this.strengthWithoutRandom;
  this.strengthWithoutRandom += difference*timeDelta*0.01;
  this.strengthWithoutRandom = this.strengthWithoutRandom.clamp(0, 1);
  this.time += timeDelta;
  var randomFactor = (Math.sin(this.time*0.02)+1)*0.25+0.5;
  this.strength = this.strengthWithoutRandom*randomFactor;
};
