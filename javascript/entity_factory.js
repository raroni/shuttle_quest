EntityFactory = {
  createSpaceship: function() {
    var radius = 48;

    var spaceship = new Voy.Entity(
      new Voy.RigidBody({
        drag: 0.05,
        maxSpeed: 2,
        maxForce: 0.003,
        bounciness: 0.5
      }),
      new Voy.CircleCollider(radius),
      new PlayerInput(),
      new SpaceshipSprite()
    );
    spaceship.addTag('player');
    spaceship.localPosition = new Voy.Vector2(185, 170);

    var engine = new Voy.Entity(
      new EngineRotator(),
      new Voy.Sprite('spaceship/engine.png', new Voy.Vector2(-14, 0))
    );
    engine.localPosition = new Voy.Vector2(-12, 18);
    spaceship.addChild(engine);

    return spaceship;
  },
  createWorld: function() {
    var world = new Voy.Entity(
      new Camera(1)
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
  createTriangle: function() {
    var radius = 40;

    var points = [
      new Voy.Point(-100, -100),
      new Voy.Point(100, -100),
      new Voy.Point(0, 100)
    ];

    var triangle = new Voy.Entity(
      new Voy.RigidBody({
        drag: 0.05,
        maxSpeed: 0.5,
        maxForce: 0.003,
        bounciness: 0.5,
        mass: 5
      }),
      new Voy.PolygonCollider(points),
      new Voy.PolygonLayer('blue', points)
    );
    triangle.localPosition = new Voy.Vector2(50, 50);
    return triangle;
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
  },
  createBackground: function() {
    var background = new Voy.Entity(
      new Camera(0.1),
      new Voy.Sprite('bg.jpg')
    );

    return background;
  }
};
