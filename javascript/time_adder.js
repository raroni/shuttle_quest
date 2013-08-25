function TimeAdder(seconds) {
  Voy.Component.call(this, 'timeAdder');
  this.time = 0;
  this.timeGiven = 0;
}

TimeAdder.prototype = Object.create(Voy.Component.prototype);

TimeAdder.prototype.initialize = function() {
  this.timer = this.getScene().timer;
};

TimeAdder.prototype.update = function(timeDelta) {
  this.time += timeDelta;
  if(this.time > 1500) {
    var timeAddition = Math.min(timeDelta*4, 10000-this.timeGiven);
    this.timeGiven += timeAddition;
    this.timer.add(timeAddition);
  }
};
