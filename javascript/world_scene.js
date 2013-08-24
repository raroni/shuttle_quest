function WorldScene(componentRegistry) {
  Voy.Scene.call(this, componentRegistry);
  this.clearColor = 'rgb(200, 200, 200)';
}

WorldScene.prototype = Object.create(Voy.Scene.prototype);

WorldScene.prototype.initialize = function() {
  this.addChild(EntityFactory.createPlayer());

  var levelData = JSON.parse(this.assets.texts.levels)[1];
  levelData.walls.forEach(function(wallData) {
    var position = new Voy.Point(wallData.position[0], wallData.position[1]);
    var size = new Voy.Vector2(wallData.size[0], wallData.size[1]);
    var rotation = wallData.rotation;

    this.addChild(EntityFactory.createWall(position, size, rotation));
  }.bind(this));
};
