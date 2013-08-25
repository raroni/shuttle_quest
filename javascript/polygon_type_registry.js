function PolygonTypeRegistry() {
  this.list = [];

  this.add({
    id: 1,
    name: 'wood',
    color: '#883b11'
  });
  this.add({
    id: 2,
    name: 'stone',
    color: 'grey'
  });
  this.add({
    id: 3,
    name: 'water',
    color: 'blue'
  });
  this.add({
    id: 4,
    name: 'earth',
    color: 'brown'
  });
  this.add({
    id: 5,
    name: 'vegetation',
    color: 'green'
  });
}

PolygonTypeRegistry.prototype.add = function(type) {
  this.list.push(type);
};

PolygonTypeRegistry.prototype.find = function(id) {
  for(var i=0; this.list.length>i; i++) {
    if(this.list[i].id == id) return this.list[i];
  }
};

PolygonTypeRegistry.prototype.forEach = function(callback) {
  this.list.forEach(callback);
};

PolygonTypeRegistry.getInstance = function() {
  if(!this.instance) this.instance = new this();
  return this.instance;
};