import {Circle} from "../shapes/circle.js"

export class Bubble {
  constructor(circle, moveVector){
    this.circle = new Circle(circle.x, circle.y, circle.radius);
    this.linearSpeed = moveVector.x;
    this.verticalSpeed = moveVector.y;
  }

  move(context) {
    // meet wall
    if (this.circle.meetHorizontalSide(canvas)) {
      this.verticalSpeed = -this.verticalSpeed;
    }
    if (this.circle.meetVerticalSide(canvas)) {
      this.linearSpeed = -this.linearSpeed;
    }
    var dX = this.linearSpeed / 4;
    var dY = this.verticalSpeed / 4 ;
    // draw
    this.circle.moveCenterBy(dX, dY);
    this.circle.drawInContext(context);
  }
}
