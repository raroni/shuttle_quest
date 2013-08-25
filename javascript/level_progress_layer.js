function LevelProgressLayer() {
  Voy.Layer.call(this, 'levelProgressLayer');
}

LevelProgressLayer.prototype = Object.create(Voy.Layer.prototype);

LevelProgressLayer.prototype.initialize = function() {
  this.levelsCount = this.getScene().levels.count();
  this.currentLevelNumber = this.getScene().levelNumber;
  this.totaltWidth = this.levelsCount*LevelProgressLayer.iconWidth + (this.levelsCount-1)*LevelProgressLayer.padding;
};

LevelProgressLayer.prototype.draw = function(canvas) {
  var left = -this.totaltWidth/2;
  var size = new Voy.Vector2(LevelProgressLayer.iconWidth, LevelProgressLayer.iconHeight);

  for(var i=0; this.levelsCount>i; i++) {
    canvas.drawRectangle(size, '#bbb', new Voy.Point(left+LevelProgressLayer.iconWidth/2, 130));
    canvas.drawRectangle(new Voy.Vector2(size[0]-10, size[1]-10), '#000', new Voy.Point(left+LevelProgressLayer.iconWidth/2, 130));
    if(this.currentLevelNumber > i+1)
      canvas.drawRectangle(new Voy.Vector2(size[0]-20, size[1]-20), '#fff', new Voy.Point(left+LevelProgressLayer.iconWidth/2, 130));
    left += LevelProgressLayer.padding+LevelProgressLayer.iconWidth;
  }
};


LevelProgressLayer.padding = 14;
LevelProgressLayer.iconWidth = 60;
LevelProgressLayer.iconHeight = 40;
