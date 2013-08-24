EntityFactory = {
  createPlayer: function() {
    var radius = 25;

    var player = new Voy.Entity(
      new Voy.RigidBody({
        drag: 0.05,
        maxSpeed: 0.5,
        maxForce: 0.003,
        bounciness: 0.5
      }),
      new Voy.CircleCollider(radius),
      new PlayerInput(),
      new Voy.CircleLayer('green', radius)
    );
    player.addTag('player');
    player.localPosition = new Voy.Vector2(185, 170);
    return player;
  },
  createWorld: function() {
    var world = new Voy.Entity(
      new Camera()
    );
    return world;
  },
  createZombie: function() {
    var radius = 40;

    var zombie = new Voy.Entity(
      new Voy.RigidBody({
        drag: 0.05,
        maxSpeed: 0.5,
        maxForce: 0.003,
        bounciness: 0.5,
        mass: 5
      }),
      new Voy.CircleCollider(radius),
      new Voy.CircleLayer('red', radius)
    );
    zombie.localPosition = new Voy.Vector2(500, 206);
    return zombie;
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
