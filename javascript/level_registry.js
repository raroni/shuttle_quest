function LevelRegistry() { }

LevelRegistry.prototype.load = function(text) {
  this.data = JSON.parse(text);
};

LevelRegistry.prototype.find = function(id) {
  var levelData = this.data[id];
  if(!levelData) throw new Error('Could not find level.');
  return levelData;
};

LevelRegistry.prototype.count = function() {
  return Object.keys(this.data).length;
};
