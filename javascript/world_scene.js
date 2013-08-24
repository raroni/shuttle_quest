function WorldScene(componentRegistry) {
  Voy.Scene.call(this, componentRegistry);
  this.clearColor = 'rgb(200, 200, 200)';
}

WorldScene.prototype = Object.create(Voy.Scene.prototype);

WorldScene.prototype.setup = function() {
  var world = EntityFactory.createWorld();
  world.addChild(EntityFactory.createPlayer());
  //world.addChild(EntityFactory.createTriangle());
  world.addChild(EntityFactory.createZombie());

  var levelData = JSON.parse(this.assets.texts.levels)[2];
  levelData.walls.forEach(function(wallData) {
    var position = new Voy.Point(wallData.position[0], wallData.position[1]);
    var size = new Voy.Vector2(wallData.size[0], wallData.size[1]);
    var rotation = wallData.rotation;

    world.addChild(EntityFactory.createWall(position, size, rotation));
  });

  this.addChild(EntityFactory.createBackground());
  this.addChild(world);

  Voy.Scene.prototype.setup.call(this);
};
