function TimeBonusLayer() {
  Voy.Layer.call(this, 'timeBonusLayer');
  this.offset = 0;
  this.time = 0;
  this.opacity = 0;
}

TimeBonusLayer.prototype = Object.create(Voy.Layer.prototype);

TimeBonusLayer.prototype.update = function(timeDelta) {
  this.time += timeDelta;
  if(this.time > 1500) {
    this.check();
    this.offset += timeDelta*0.05;

    if(this.opacity != 0) {
      this.opacity -= 0.0005*timeDelta;
      if(this.opacity < 0) this.opacity = 0;
    }
  }
};

TimeBonusLayer.prototype.check = function() {
  if(!this.checked) {
    this.opacity = 1;
    this.checked = true;
  }
};

TimeBonusLayer.prototype.draw = function(canvas) {
  canvas.text.color = '#fff';
  canvas.text.setAlign('center');
  canvas.text.setFont('italic 110px verdana');
  var position = new Voy.Point(0, -50-this.offset);
  canvas.text.draw("+10", position);
};
