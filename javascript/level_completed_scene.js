function LevelCompletedScene(timer, levelNumber) {
  Voy.Scene.call(this);
  this.timer = timer;
  this.levelNumber = levelNumber;
  this.clearColor = 'rgb(0, 0, 0)';
  this.time = 0;
}

LevelCompletedScene.prototype = Object.create(Voy.Scene.prototype);

LevelCompletedScene.prototype.setup = function() {
  var description = new Voy.Entity(
    new LevelCompletedLayer(),
    new TimeStatusLayer()
  );
  description.localPosition = Voy.Vector2.multiply(this.renderer.canvas.resolution, 0.5);

  var timeAddition = new Voy.Entity(
    new TimeAdder(10),
    new TimeBonusLayer()
  );
  timeAddition.localPosition = Voy.Vector2.multiply(this.renderer.canvas.resolution, 0.5);

  this.addChild(description);
  this.addChild(timeAddition);
};

LevelCompletedScene.prototype.update = function(timeDelta) {
  Voy.Scene.prototype.update.call(this, timeDelta);
  this.time += timeDelta;
  if(this.time > 6500) this.completed = true;
};
