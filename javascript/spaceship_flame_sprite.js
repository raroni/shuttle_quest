function SpaceshipFlameSprite() {
  Voy.Sprite.call(this, 'spaceship/flame.png', new Voy.Vector2(-55, 0));
  this.type = 'spaceshipFlameSprite';
}

SpaceshipFlameSprite.prototype = Object.create(Voy.Sprite.prototype);

SpaceshipFlameSprite.prototype.draw = function(canvas) {
  if(this.entity.parent.rigidBody.force.getLengthSquared() != 0)
    Voy.Sprite.prototype.draw.call(this, canvas);
};
