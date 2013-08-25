function Health() {
  Voy.Component.call(this, 'health');
  this.maxPoints = 100;
  this.points = this.maxPoints;
}

Health.prototype = Object.create(Voy.Component.prototype);

Health.prototype.receiveDamage = function(points) {
  this.points -= points;
  if(this.points < 0) this.points = 0;
};

Health.prototype.getPercentage = function() {
  return this.points/this.maxPoints;
};

Health.prototype.isDead = function() {
  return this.points === 0;
};
