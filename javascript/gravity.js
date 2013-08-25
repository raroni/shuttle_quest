function Gravity() {
  Voy.Component.call(this, 'gravity');
}

Gravity.prototype = Object.create(Voy.Component.prototype);

Gravity.prototype.initialize = function() {
  this.scene = this.getScene();
  this.rigidBody = this.entity.rigidBody;
  this.force = new Voy.Vector2(0, 0.001);
};

Gravity.prototype.update = function() {
  if(this.scene.playing) this.rigidBody.force.add(this.force);
};
