function Game() {
  Voy.Game.call(this);

  this.renderer.updateResolution(800, 600);

  this.assets.images.prefix = './images';

  this.assets.texts.prefix = './data';
  this.assets.texts.suffix = '.json';

  this.levels = new LevelRegistry();

  var scene = new LoadingScene(this.levels);
  this.changeScene(scene);

  this.timer = new Timer(Game.secondsPerLevel*1000);
}

Game.prototype = Object.create(Voy.Game.prototype);

Game.prototype.update = function(timeDelta) {
  this.timer.update(timeDelta);
  Voy.Game.prototype.update.call(this, timeDelta);
};

Game.prototype.makeWorldScene = function() {
  var scene = new WorldScene(this.timer, this.levels, this.levelNumber);;
  return scene;
};

Game.prototype.getNextScene = function() {
  var scene;

  if(this.scene instanceof LoadingScene) {
    this.levelNumber = 1;
    scene = this.makeWorldScene();
  }
  else if(this.scene instanceof WorldScene) {
    if(this.scene.outcome == 'fail') {
      this.levelNumber = 1;
      this.timer.windUp(Game.secondsPerLevel*1000);
      scene = this.makeWorldScene();
    } else {
      if(this.levelNumber == this.levels.count()) {
        scene = new CreditsScene(this.timer);
      } else {
        scene = new LevelCompletedScene(this.timer, this.levelNumber);
      }
    }
  }
  else if(this.scene instanceof LevelCompletedScene) {
    this.levelNumber++;
    scene = this.makeWorldScene();
  }
  else if(this.scene instanceof CreditsScene) {
    this.levelNumber = 1;
    scene = this.makeWorldScene();
  } else {
    throw new Error('I dont know what to do!');
  }

  return scene;
};

Game.secondsPerLevel = 10;
