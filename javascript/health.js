function Health() {
  Voy.Component.call(this, 'health');
  this.points = 90;
  this.maxPoints = 100;
}

Health.prototype = Object.create(Voy.Component.prototype);

Health.prototype.receiveDamage = function(points) {
  this.points -= points;
  if(this.points < 0) this.points = 0;
};

Health.prototype.getPercentage = function() {
  return this.points/this.maxPoints;
};
