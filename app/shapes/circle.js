import {Point} from "../point.js"
const eps = 4;

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

  meetVerticalSide(canvas) {
    return (this.center.x + this.radius) > canvas.width || (this.center.x - this.radius) < 0
  }

  meetHorizontalSide(canvas) {
    return (this.center.y + this.radius) > canvas.height || (this.center.y - this.radius) < 0
  }
}
