EntityFactory = {
  createSpaceship: function(position) {
    var radius = 48;

    var spaceship = new Voy.Entity(
      new Voy.RigidBody({
        drag: 0.05,
        maxSpeed: 2,
        maxForce: 0.006,
        bounciness: 0.5
      }),
      new Voy.CircleCollider(radius),
      new CollisionDamageInflictor(),
      new PlayerInput(),
      new WaterResistance(),
      new Thrust(),
      new Health(),
      new SpaceshipSprite()
    );
    spaceship.addTag('player');
    spaceship.localPosition = position;

    var engine = new Voy.Entity(new EngineRotator());
    engine.localPosition = new Voy.Vector2(-12, 18);

    var flame = new Voy.Entity(
      new FlameFlicker(),
      new SpaceshipFlameSprite()
    );
    engine.addChild(flame);

    var engineCase = new Voy.Entity(
      new Voy.Sprite('spaceship/engine.png', new Voy.Vector2(-14, 0))
    );
    engine.addChild(engineCase);

    spaceship.addChild(engine);

    return spaceship;
  },
  createWorld: function() {
    var world = new Voy.Entity(
      new Camera(1)
    );
    return world;
  },
  createRock: function(position) {
    var radius = 40;

    var rock = new Voy.Entity(
      new Voy.RigidBody({
        drag: 0.05,
        maxSpeed: 0.5,
        maxForce: 0.003,
        bounciness: 2,
        mass: 0.5
      }),
      new Voy.CircleCollider(radius),
      new Gravity(),
      new Voy.CircleLayer(radius, 'grey')
    );
    rock.localPosition = position;
    rock.addTag('rock');
    return rock;
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
  createWall: function(position, points, type) {
    var wall = new Voy.Entity(
      new Voy.RigidBody({ static: true }),
      new Voy.PolygonCollider(points),
      new Voy.PolygonLayer(type.color, points)
    );

    wall.localPosition = position;
    return wall;
  },
  createBackground: function() {
    var background = new Voy.Entity(
      new Camera(0.05),
      new Voy.Sprite('bg.jpg')
    );

    return background;
  },
  createHUD: function(resolution) {
    var hud = new Voy.Entity();

    var timer = new Voy.Entity(new TimerLayer());
    timer.localPosition[0] = resolution[0] - 11;
    timer.localPosition[1] = 44;
    hud.addChild(timer);

    var healthCircle = new Voy.Entity(new HealthCircleLayer());
    healthCircle.localPosition = new Voy.Vector2(60, 60);
    hud.addChild(healthCircle);

    return hud;
  },
  createTide: function(tideConfig) {
    var tide = new Voy.Entity(
      new TidalForce(tideConfig.speed),
      new Voy.RectangleCollider(new Voy.Vector2(4000, 1120)),
      new WaterLayer()
    );
    tide.addTag('tide');
    tide.localPosition = Voy.Point.createFromArray(tideConfig.position);
    return tide;
  },
  createGoal: function(position) {
    var radius = 50;
    var goal = new Voy.Entity(
      new Voy.CircleCollider(radius),
      new Voy.Sprite('goal.png'),
      new Rotation(),
      new CollisionWin()
    );
    goal.localPosition = position;
    return goal;
  },
  createPresenter: function(resolution) {
    var presenter = new Voy.Entity(
      new ReadyFader(),
      new FadingBackgroundLayer(),
      new LevelProgressLayer(),
      new ReadyTextLayer()
    );
    presenter.localPosition = Voy.Point.multiply(resolution, 0.5).toPoint();
    return presenter;
  },
  createBlackout: function(resolution) {
    var blackout = new Voy.Entity(
      new DecidedFader(),
      new FadingBackgroundLayer()
    );
    blackout.localPosition = Voy.Point.multiply(resolution, 0.5).toPoint();
    return blackout;
  }
};
