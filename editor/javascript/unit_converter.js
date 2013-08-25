var UnitConverter = {
  scale: 3,
  worldToEditor: function(worldPoint) {
    return Voy.Vector2.divide(worldPoint, this.scale);
  },
  editorToWorld: function(editorPoint) {
    return Voy.Vector2.multiply(editorPoint, this.scale);
  }
};
