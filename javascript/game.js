function Game() {
  Voy.Game.call(this);

  this.renderer.updateResolution(800, 600);

  this.assets.images.prefix = './images';

  this.assets.texts.prefix = './data';
  this.assets.texts.suffix = '.json';

  var scene = new LoadingScene();
  this.changeScene(scene);

  this.timer = new Timer(10000);
}

Game.prototype = Object.create(Voy.Game.prototype);

Game.prototype.update = function(timeDelta) {
  this.timer.update(timeDelta);
  Voy.Game.prototype.update.call(this, timeDelta);
};


Game.prototype.getNextScene = function() {
  var scene = new WorldScene(this.timer);
  return scene;
};
