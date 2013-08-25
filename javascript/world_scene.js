function WorldScene(componentRegistry) {
  Voy.Scene.call(this, componentRegistry);
  this.clearColor = 'rgb(200, 200, 200)';
}

WorldScene.prototype = Object.create(Voy.Scene.prototype);

WorldScene.prototype.setup = function() {
  var world = EntityFactory.createWorld();
  world.addChild(EntityFactory.createSpaceship());
  //world.addChild(EntityFactory.createTriangle());
  world.addChild(EntityFactory.createZombie());

  var levelData = JSON.parse(this.assets.texts.levels)[1];
  levelData.walls.forEach(function(wallData) {
    var position = new Voy.Point(wallData.position[0], wallData.position[1]);
    var points = [];
    wallData.points.forEach(function(point) {
      points.push(new Voy.Point(point[0], point[1]));
    });

    world.addChild(EntityFactory.createWall(position, points));
  });

  this.addChild(EntityFactory.createBackground());
  this.addChild(world);

  Voy.Scene.prototype.setup.call(this);
};
