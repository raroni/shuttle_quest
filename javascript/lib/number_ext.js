Number.prototype.clamp = function(min, max) {
  return Math.max(min, Math.min(this, max));
};
