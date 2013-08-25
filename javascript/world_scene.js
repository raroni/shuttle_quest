function WorldScene(componentRegistry) {
  Voy.Scene.call(this, componentRegistry);
  this.clearColor = 'rgb(200, 200, 200)';
}

WorldScene.prototype = Object.create(Voy.Scene.prototype);

WorldScene.prototype.setup = function() {
  var world = EntityFactory.createWorld();

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

  this.addChild(EntityFactory.createBackground());
  this.addChild(world);

  Voy.Scene.prototype.setup.call(this);
};
