import {Point} from "../point.js"

export class Circle {
  constructor(centerX, centerY, radius) {
    this.center = new Point(centerX, centerY);
    this.radius = radius;
  }

  inspect() {
    return "center: " + this.center.inspect() + " radius: " + this.radius;
  }
}
