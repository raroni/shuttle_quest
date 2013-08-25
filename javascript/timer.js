function Timer(milliSeconds) {
  this.milliSeconds = 10000;
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

Timer.prototype.stop = function() {
  this.running = false;
};

Timer.prototype.start = function() {
  this.running = true;
};
