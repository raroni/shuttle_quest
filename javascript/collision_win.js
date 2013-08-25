function CollisionWin() {
  Voy.Component.call(this, 'collisionWin');
}

CollisionWin.prototype = Object.create(Voy.Component.prototype);

CollisionWin.prototype.initialize = function() {
  this.scene = this.getScene();
};

CollisionWin.prototype.collided = function() {
  if(!this.scene.won) this.scene.win();
};
