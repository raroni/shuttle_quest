function SpaceshipFlameSprite() {
  Voy.Sprite.call(this);
  this.type = 'spaceshipFlameSprite';
}

SpaceshipFlameSprite.prototype = Object.create(Voy.Sprite.prototype);

SpaceshipFlameSprite.prototype.initialize = function() {
  Voy.Sprite.prototype.initialize.call(this);
  this.flameFlicker = this.entity.flameFlicker;
  this.thrust = this.entity.parent.parent.thrust;
  this.smallFlameImage = this.getImage('spaceship/flame.png');
  this.largeFlameImage = this.getImage('spaceship/large_flame.png');
};

SpaceshipFlameSprite.prototype.draw = function(canvas) {
  if(this.thrust.boosterOn) {
    this.image = this.largeFlameImage;
    this.position = new Voy.Vector2(-80, 0);
  } else {
    this.image = this.smallFlameImage;
    this.position = new Voy.Vector2(-55, 0);
  }
  this.opacity = this.flameFlicker.strength;
  Voy.Sprite.prototype.draw.call(this, canvas);
};
