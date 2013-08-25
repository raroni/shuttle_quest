function PlayerInput() {
  Voy.Component.call(this, 'input');
  this.keyboard = Voy.Keyboard.getInstance();
}

PlayerInput.prototype = Object.create(Voy.Component.prototype);

PlayerInput.prototype.initialize = function() {
  this.scene = this.getScene();
};

PlayerInput.prototype.update = function() {
  var direction = Voy.Vector2.zero();

  if(this.scene.playing) {
    if(this.keyboard.keysPressed.right) direction[0] = 1;
    else if(this.keyboard.keysPressed.left) direction[0] = -1;
    if(this.keyboard.keysPressed.up) direction[1] = -1;
    else if(this.keyboard.keysPressed.down) direction[1] = 1;
    this.entity.thrust.boosterOn = this.keyboard.keysPressed.x;
  } else {
    this.entity.thrust.boosterOn = false;
  }
  this.entity.thrust.direction = direction;
};
