function Game() {
  Voy.Game.call(this);

  this.renderer.updateResolution(800, 600);

  this.assets.images.prefix = './images';

  this.assets.texts.prefix = './data';
  this.assets.texts.suffix = '.json';

  var scene = new LoadingScene();
  this.changeScene(scene);

  this.timer = new Timer(Game.secondsPerLevel*1000);
}

Game.prototype = Object.create(Voy.Game.prototype);

Game.prototype.update = function(timeDelta) {
  this.timer.update(timeDelta);
  Voy.Game.prototype.update.call(this, timeDelta);
};


Game.prototype.getNextScene = function() {
  var scene;

  if(this.scene instanceof LoadingScene) {
    this.levelNumber = 1;
    scene = new WorldScene(this.timer, this.levelNumber);
  }
  else if(this.scene instanceof WorldScene) {
    if(this.scene.outcome == 'fail') {
      this.levelNumber = 1;
      this.timer.windUp(Game.secondsPerLevel*1000);
      scene = new WorldScene(this.timer, this.levelNumber);
    } else {
      this.levelNumber++;
      this.timer.add(Game.secondsPerLevel*1000);
      scene = new WorldScene(this.timer, this.levelNumber);
    }
  } else {
    throw new Error('I dont know what to do here!');
  }

  return scene;
};

Game.secondsPerLevel = 10;
