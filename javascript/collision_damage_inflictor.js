function CollisionDamageInflictor() {
  Voy.Component.call(this, 'collisionDamageInflictor');
  this.minimumLimit = 0.15;
  this.amount = 30;
}

CollisionDamageInflictor.prototype = Object.create(Voy.Component.prototype);

CollisionDamageInflictor.prototype.initialize = function() {
  this.health = this.entity.health;
}

CollisionDamageInflictor.prototype.collided = function(collision) {
  if(collision.isPhysical() && collision.velocityAlongNormal*-1 > this.minimumLimit) {
    var otherEntity = collision.getOther(this.entity);
    var q = otherEntity.hasTag('rock') ? 0.2 : 1;
    this.health.receiveDamage(Math.round(collision.velocityAlongNormal*-this.amount*q));
  }
};
