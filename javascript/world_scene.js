function WorldScene(timer) {
  Voy.Scene.call(this);
  this.timer = timer;
  this.clearColor = 'rgb(200, 200, 200)';
  this.playing = false;
  this.keyboard = Voy.Keyboard.getInstance();
}

WorldScene.prototype = Object.create(Voy.Scene.prototype);

WorldScene.prototype.setup = function() {
  var world = EntityFactory.createWorld();

  var hud = EntityFactory.createHUD(this.renderer.canvas.resolution);

  var levelData = JSON.parse(this.assets.texts.levels)[1];
  var playerPosition = Voy.Point.createFromArray(levelData.player.position);
  world.addChild(EntityFactory.createSpaceship(playerPosition));
  //world.addChild(EntityFactory.createTriangle());
  //world.addChild(EntityFactory.createZombie());

  levelData.walls.forEach(function(wallData) {
    var position = new Voy.Point(wallData.position[0], wallData.position[1]);
    var points = [];
    wallData.points.forEach(function(point) {
      points.push(new Voy.Point(point[0], point[1]));
    });

    var polygonType = PolygonTypeRegistry.getInstance().find(wallData.polygonTypeId);

    world.addChild(EntityFactory.createWall(position, points, polygonType));
  });

  world.addChild(EntityFactory.createGoal(Voy.Point.createFromArray(levelData.goalPosition)));

  this.addChild(EntityFactory.createBackground());
  this.addChild(world);
  this.addChild(hud);

  this.addChild(EntityFactory.createPresenter(this.renderer.canvas.resolution));

  Voy.Scene.prototype.setup.call(this);
};

WorldScene.prototype.initialize = function() {
  Voy.Scene.prototype.initialize.call(this);
};

WorldScene.prototype.update = function(timeDelta) {
  if(!this.playing) {
    if(this.keyboard.anyKeysPressed()) this.start();
  }
  Voy.Scene.prototype.update.call(this, timeDelta);
};

WorldScene.prototype.start = function() {
  this.playing = true;
  this.timer.start();
};

WorldScene.prototype.win = function() {
  this.won = true;
};
