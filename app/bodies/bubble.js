import {Circle} from "../shapes/circle.js"

export class Bubble {
  constructor(circle, moveVector){
    this.circle = new Circle(circle[0], circle[1], circle[2]);
    this.linearSpeed = moveVector[0];
    this.verticalSpeed = moveVector[1];
  }

  move(context) {
    // meet wall
    if (this.circle.meetHorizontalSide(canvas)) {
      this.verticalSpeed = -this.verticalSpeed;
    }
    if (this.circle.meetVerticalSide(canvas)) {
      this.linearSpeed = -this.linearSpeed;
    }
    var dX = this.linearSpeed;
    var dY = this.verticalSpeed;
    // clear
    context.clearRect(0, 0, canvas.width, canvas.height);
    // draw
    this.circle.moveCenterBy(dX, dY);
    this.circle.drawInContext(context);
  }
}
