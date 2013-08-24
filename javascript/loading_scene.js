function LoadingScene() {
  Voy.Scene.call(this);
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
  this.completed = true;
};
