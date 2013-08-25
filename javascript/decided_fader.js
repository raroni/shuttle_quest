function DecidedFader() {
  Fader.call(this, 0, 1);
  this.speed = 2;
}

DecidedFader.prototype = Object.create(Fader.prototype);

DecidedFader.prototype.initialize = function() {
  this.scene = this.getScene();
};

DecidedFader.prototype.update = function(timeDelta) {
  if(!this.active) {
    if(this.scene.outcome) this.activate();
  }
  Fader.prototype.update.call(this, timeDelta);
};
