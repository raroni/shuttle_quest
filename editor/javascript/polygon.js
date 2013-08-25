function Polygon() {
  this.points = [];
}

Polygon.prototype.hasPoint = function(point) {
  return this.points.indexOf(point) !== -1;
};
