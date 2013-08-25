function WorldScene(timer, levelData) {
  Voy.Scene.call(this);
  this.timer = timer;
  this.clearColor = 'rgb(200, 200, 200)';
  this.playing = false;
  this.keyboard = Voy.Keyboard.getInstance();
  this.levelData = levelData;
}

WorldScene.prototype = Object.create(Voy.Scene.prototype);

WorldScene.prototype.setup = function() {
  var world = EntityFactory.createWorld();

  var hud = EntityFactory.createHUD(this.renderer.canvas.resolution);

  var playerPosition = Voy.Point.createFromArray(this.levelData.player.position);
  this.levelName = this.levelData.name;
  this.levelNumber = this.levelData.number;
  this.player = EntityFactory.createSpaceship(playerPosition);
  world.addChild(this.player);

  this.levelData.walls.forEach(function(wallData) {
    var position = new Voy.Point(wallData.position[0], wallData.position[1]);
    var points = [];
    wallData.points.forEach(function(point) {
      points.push(new Voy.Point(point[0], point[1]));
    });

    var polygonType = PolygonTypeRegistry.getInstance().find(wallData.polygonTypeId);

    world.addChild(EntityFactory.createWall(position, points, polygonType));
  });

  world.addChild(EntityFactory.createGoal(Voy.Point.createFromArray(this.levelData.goal.position)));

  this.addChild(EntityFactory.createBackground());
  this.addChild(world);
  this.addChild(hud);

  this.addChild(EntityFactory.createPresenter(this.renderer.canvas.resolution));

  this.blackout = EntityFactory.createBlackout(this.renderer.canvas.resolution);
  this.addChild(this.blackout);

  Voy.Scene.prototype.setup.call(this);
};

WorldScene.prototype.initialize = function() {
  Voy.Scene.prototype.initialize.call(this);
};

WorldScene.prototype.update = function(timeDelta) {
  if(!this.outcome) {
    if(!this.playing) {
      if(this.keyboard.anyKeysPressed()) this.startPlaying();
    }
    else if(this.timer.isCompleted() || this.player.health.isDead()) {
      this.lose();
    }
  }

  Voy.Scene.prototype.update.call(this, timeDelta);

  if(this.blackout.fader.isCompleted()) this.completed = true;
};

WorldScene.prototype.startPlaying = function() {
  this.playing = true;
  this.timer.start();
};

WorldScene.prototype.stopPlaying = function() {
  this.playing = false;
  this.timer.stop();
};

WorldScene.prototype.win = function() {
  this.outcome = 'win';
  this.stopPlaying();
};

WorldScene.prototype.lose = function() {
  this.outcome = 'fail';
  this.stopPlaying();
};
