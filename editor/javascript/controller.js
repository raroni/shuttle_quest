function Controller(world, writer) {
  this.world = world;
  this.writer = writer;
}

Controller.prototype.clicked = function(position) {
  var worldPoint = PointConverter.editorToWorld(position);
  var exitingWorldPoint = this.world.findPoint(worldPoint);
  if(exitingWorldPoint) {
    this.world.togglePoint(exitingWorldPoint);
  } else {
    this.world.points.push(worldPoint);
    this.world.togglePoint(worldPoint);
  }
};

Controller.prototype.cPressed = function(position) {
  if(this.world.selectedPoints.length <= 2) {
    alert('Too few polygons selected.')
    return;
  }
  var polygon = new Polygon();
  this.world.selectedPoints.forEach(function(point) {
    polygon.points.push(point);
  }.bind(this));
  if(!polygon.isValid()) {
    alert('Polygon is not convex!');
    return;
  }
  this.world.deselectPoints();
  this.world.polygons.push(polygon);
};

Controller.prototype.rPressed = function() {
  this.world.removeSelectedPoints();
};

Controller.prototype.wPressed = function() {
  this.writer.execute();
};

Controller.prototype.dPressed = function() {
  this.world.deselectPoints();
};

Controller.prototype.leftPressed = function() {
  this.handleMove(-Controller.moveSpeed, 0);
};

Controller.prototype.rightPressed = function() {
  this.handleMove(Controller.moveSpeed, 0);
};

Controller.prototype.upPressed = function() {
  this.handleMove(0, -Controller.moveSpeed);
};

Controller.prototype.downPressed = function() {
  this.handleMove(0, Controller.moveSpeed);
};

Controller.prototype.handleMove = function(x, y) {
  var targets;
  if(this.world.selectedPoints.length != 0) {
    targets = this.world.selectedPoints;
  } else {
    targets = [this.world.screen.position];
  }
  targets.forEach(function(target) {
    target[0] += x;
    target[1] += y;
  });
};

Controller.moveSpeed = 25;
