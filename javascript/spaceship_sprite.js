function SpaceshipSprite() {
  Voy.Sprite.call(this, 'spaceship/hull.png');
}

SpaceshipSprite.prototype = Object.create(Voy.Sprite.prototype);

SpaceshipSprite.prototype.draw = function(canvas) {
  if(this.entity.rigidBody.velocity[0] > 0) {
    this.flippedHorizontally = false;
  }
  else if(this.entity.rigidBody.velocity[0] < 0) {
    this.flippedHorizontally = true;
  }
  Voy.Sprite.prototype.draw.call(this, canvas);
};
