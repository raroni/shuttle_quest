function LoadingScene(levels) {
  Voy.Scene.call(this);
  this.levels = levels;
}

LoadingScene.prototype = Object.create(Voy.Scene.prototype);

LoadingScene.prototype.initialize = function() {
  this.assets.on('loadingCompleted', this.complete.bind(this));

  this.assets.images.add('spaceship/hull.png');
  this.assets.images.add('spaceship/engine.png');
  this.assets.images.add('spaceship/flame.png');

  this.assets.images.add('bg.jpg');

  this.assets.texts.add('levels');
};

LoadingScene.prototype.complete = function() {
  this.levels.load(this.assets.texts.levels);
  this.completed = true;
};
