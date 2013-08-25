function PlayerInput() {
  Voy.Component.call(this, 'input');
  this.keyboard = Voy.Keyboard.getInstance();
}

PlayerInput.prototype = Object.create(Voy.Component.prototype);

PlayerInput.prototype.initialize = function() {
  this.rigidBody = this.entity.rigidBody;
  this.scene = this.getScene();
};

PlayerInput.prototype.update = function() {
  if(!this.scene.playing) return;
  var force = Voy.Vector2.zero();
  if(this.keyboard.keysPressed.right) force[0] = 1;
  else if(this.keyboard.keysPressed.left) force[0] = -1;
  if(this.keyboard.keysPressed.up) force[1] = -1;
  else if(this.keyboard.keysPressed.down) force[1] = 1;

  force.multiply(this.rigidBody.maxForce);
  if(!this.keyboard.keysPressed.x) force.multiply(0.5);

  this.rigidBody.force.add(force);
};
