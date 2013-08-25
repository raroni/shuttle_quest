function ReadyFader() {
  Fader.call(this, 1, 0);
  this.speed = 8;
}

ReadyFader.prototype = Object.create(Fader.prototype);

ReadyFader.prototype.initialize = function() {
  this.scene = this.getScene();
};

ReadyFader.prototype.update = function(timeDelta) {
  if(!this.active) {
    if(this.scene.playing) this.activate();
  }
  Fader.prototype.update.call(this, timeDelta);

  if(this.completed()) {
    if(!window.q) console.log('JEG SKAL SLETTES');
    window.q = true;
  }
};
