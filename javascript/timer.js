function Timer(milliSeconds) {
  this.milliSeconds = milliSeconds;
  this.running = false;
}

Timer.prototype = Object.create(Voy.EventEmitter);

Timer.prototype.update = function(timeDelta) {
  if(this.running) {
    this.milliSeconds -= timeDelta;
    if(this.milliSeconds < 0) this.milliSeconds = 0;
    if(this.milliSeconds == 0) {
      this.emit('alarm');
      this.stop();
    }
  }
};

Timer.prototype.windUp = function(milliSeconds) {
  this.milliSeconds = milliSeconds;
};

Timer.prototype.stop = function() {
  this.running = false;
};

Timer.prototype.add = function(milliSeconds) {
  this.milliSeconds += milliSeconds;
};

Timer.prototype.start = function() {
  this.running = true;
};

Timer.prototype.isCompleted = function() {
  return this.milliSeconds === 0;
};

Timer.prototype.getSeconds = function() {
  return Math.floor(this.milliSeconds/1000);
};
