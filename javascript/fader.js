function Fader(initial, target) {
  this.target = target;
  this.current = initial;
  this.active = false;
  this.speed = 4;
  Voy.Component.call(this, 'fader');
}

Fader.prototype = Object.create(Voy.Component.prototype);

Fader.prototype.activate = function() {
  this.active = true;
};

Fader.prototype.deactivate = function() {
  this.active = false;
};

Fader.prototype.update = function(timeDelta) {
  if(this.active) {
    var step = this.target - this.current;
    var largestStep = timeDelta*this.speed*0.0002;
    if(Math.abs(step) > largestStep) step = largestStep*(step/Math.abs(step));
    this.current += step;
    this.current = Math.min(1, this.current);
    if(this.isCompleted()) this.deactivate();
  }
};

Fader.prototype.isCompleted = function() {
  return this.current === this.target;
};
