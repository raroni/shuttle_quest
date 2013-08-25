var PointConverter = {
  scale: 3,
  worldToEditor: function(worldPoint) {
    var editorPoint = Voy.Vector2.zero();
    editorPoint[0] = Math.round(worldPoint[0]/this.scale);
    editorPoint[1] = Math.round(worldPoint[1]/this.scale);
    return editorPoint;
  },
  editorToWorld: function(editorPoint) {
    var worldPoint = Voy.Vector2.zero();
    worldPoint[0] = Math.round(editorPoint[0]*this.scale);
    worldPoint[1] = Math.round(editorPoint[1]*this.scale);
    return worldPoint;
  }
};
