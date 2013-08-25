function HealthCircleLayer() {
  Voy.Layer.call(this, 'fadingBackgroundLayer');
}

HealthCircleLayer.prototype = Object.create(Voy.Layer.prototype);

HealthCircleLayer.prototype.initialize = function() {
  this.health = this.getScene().findEntityWithTag('player').health;
};

HealthCircleLayer.prototype.draw = function(canvas) {
  var startAngle = (1-this.health.getPercentage())*Math.PI*2-Math.PI*0.5;
  var endAngle = Math.PI*2*0.75;

  canvas.context.shadowColor = 'rgba(0, 0, 0, 0.5)';
  canvas.context.shadowBlur = 18;
  canvas.drawCircle(53, '#ad2b2b', Voy.Point.zero(), 0, Math.PI*2);

  canvas.context.shadowColor = 0;
  canvas.drawCircle(50, '#ad2b2b', Voy.Point.zero(), -Math.PI*0.5, startAngle);

  canvas.context.shadowColor = '#000';
  canvas.context.shadowBlur = 14;
  canvas.context.shadowOffsetX = 0;
  canvas.context.shadowOffsetY = 0;
  canvas.drawCircle(50, '#437f35', Voy.Point.zero(), startAngle, endAngle);
  
  canvas.context.shadowColor = 0;
  canvas.context.shadowBlur = 0;

  canvas.context.beginPath();
  canvas.context.strokeStyle = '#2c4e19';
  canvas.context.lineWidth = 5;
  canvas.context.arc(0, 0, 52, 0, -Math.PI*2, false);
  canvas.context.closePath();
  canvas.context.stroke();
};
