import {Point} from "../point.js"

export class Circle {
  constructor(centerX, centerY, radius) {
    this.center = new Point(centerX, centerY);
    this.radius = radius;
  }

  inspect() {
    return "center: " + this.center.inspect() + " radius: " + this.radius;
  }

  drawInContext(context) {
    context.beginPath();
    context.arc(this.center.x, this.center.y, this.radius, 0, 2*Math.PI, true);
    context.stroke();
  }

  moveCenterBy(dX, dY) {
    this.center = new Point(this.center.x + dX, this.center.y + dY);
  }

  meetCanvas(canvas) {
    var meetX = (this.center.x + this.raduis) > canvas.width
    var meetY = (this.center.y + this.radius) > canvas.height
    return meetX || meetY
  }
}
