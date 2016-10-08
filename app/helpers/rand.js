export const minRadius = 20;
export const maxRadius = 60;
export const minSpeed = 0.3;
export const maxSpeed = 8;

export function randRadius() {
  return Math.floor(Math.random() * (maxRadius - minRadius)) + minRadius;
}

export function randSpeed() {
  var signBase = Math.random();
  var speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
  if (signBase < 0.5) {
    return speed;
  } else {
    return - speed;
  }
}
