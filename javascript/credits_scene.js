function CreditsScene(timer) {
  Voy.Scene.call(this);
  this.clearColor = '#1a3a6b';
  this.timer = timer;
  this.time = 0;
}

CreditsScene.prototype = Object.create(Voy.Scene.prototype);

CreditsScene.prototype.setup = function() {
  var entity = new Voy.Entity(
    new CreditsLayer()
  );
  entity.localPosition = Voy.Vector2.multiply(this.renderer.canvas.resolution, 0.5);
  this.addChild(entity);
};

CreditsScene.prototype.update = function(timeDelta) {
  Voy.Scene.prototype.update.call(this, timeDelta);
  this.time += timeDelta;
  if(this.time > 2000 && Voy.Keyboard.getInstance().anyKeysPressed()) this.completed = true;
};
