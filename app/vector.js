// present simple vector in Decart coordinates
// create it by defining start point and end point
import {Point} from "point.js";
export class Vector {
  constructor(startX, startY, endX, endY) {
    this.startPoint = new Point(startX, startY);
    this.endPoint = new Point(endX, endY);
  }

  len() {
    return this.endPoint.distance(this.startPoint);
  }

  inspect() {
    return "start point: " + this.startPoint.inspect() +
           " end point: " + this.endPoint.inspect()
  }

  sum(vector) {
    return new Vector(
      this.startPoint.x + vector.startPoint.x,
      this.startPoint.y + vector.startPoint.y,
      this.endPoint.x + vector.endPoint.x,
      this.endPoint.y + vector.endPoint.y
    )
  }
}
