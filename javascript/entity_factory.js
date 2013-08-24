EntityFactory = {
  createPlayer: function() {
    var radius = 25;

    var player = new Voy.Entity(
      new Voy.RigidBody({
        drag: 0.05,
        maxSpeed: 0.2,
        maxForce: 0.001
      }),
      new Voy.CircleCollider(radius),
      new PlayerInput(),
      new Voy.CircleLayer('green', radius)
    );
    player.localPosition = new Voy.Vector2(220, 145);
    return player;
  },
  createWall: function(position, size, rotation) {
    var wall = new Voy.Entity(
      new Voy.RigidBody({ static: true }),
      new Voy.RectangleCollider(size),
      new Voy.RectangleLayer('grey', size)
    );

    wall.localPosition = position;
    wall.localRotation = rotation;
    return wall;
  }
};
