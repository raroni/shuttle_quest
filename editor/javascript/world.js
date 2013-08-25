function World() {
  this.points = [];
  this.polygons = [];
  this.screen = { position: Voy.Point.zero(), size: new Voy.Point(800, 600) };
  this.selectedPoints = [];
}

World.prototype.findPoint = function(point) {
  var currentPoint;
  for(var i=0; this.points.length>i; i++) {
    currentPoint = this.points[i];
    if(
      currentPoint[0]-World.findTolerance <= point[0] &&
      currentPoint[0]+World.findTolerance >= point[0] &&
      currentPoint[1]-World.findTolerance <= point[1] &&
      currentPoint[1]+World.findTolerance >= point[1]
    ) return currentPoint;
  }
};

World.prototype.togglePoint = function(point) {
  var index = this.selectedPoints.indexOf(point);
  if(index === -1)
    this.selectedPoints.push(point);
  else
    this.selectedPoints.splice(index, 1);
};

World.findTolerance = 30;

World.prototype.isPointSelected = function(point) {
  var index = this.selectedPoints.indexOf(point);
  return index !== -1;
};

World.prototype.deselectPoints = function() {
  while(this.selectedPoints[0]) {
    this.togglePoint(this.selectedPoints[0]);
  }
};

World.prototype.removeSelectedPoints = function() {
  while(this.selectedPoints[0]) {
    this.points.splice(this.points.indexOf(this.selectedPoints[0]), 1);
    for(var i=0; this.polygons.length>i; i++) {
      if(this.polygons[i].hasPoint(this.selectedPoints[0])) {
        this.polygons.splice(i, 1);
        i--;
      }
    }
    this.togglePoint(this.selectedPoints[0]);
  }
};


World.prototype.toData = function() {
  var walls = [];
  this.polygons.forEach(function(polygon) {
    var center = Voy.Point.zero();
    polygon.points.forEach(function(point) {
      center.add(point);
    });
    center.divide(polygon.points.length);
    center.round();

    var wall = {
      points: [],
      position: center
    };

    polygon.points.forEach(function(point) {
      var localPoint = Voy.Point.subtract(point, center);
      wall.points.push(localPoint.toArray());
    });
    walls.push(wall);
  });
  return walls;
};
