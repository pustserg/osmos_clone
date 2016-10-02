// Represent simple point in Decart coordinates
export class Point {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }

  inspect() { return "x: " + this.x + ", y: " + this.y }

  distance(point) {
    return Math.sqrt(
      (point.x - this.x) * (point.x - this.x) +
      (point.y - this.y) * (point.y - this.y)
    )
  }
}
