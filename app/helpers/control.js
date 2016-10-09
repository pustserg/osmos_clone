import {Bubble} from "../bodies/bubble.js";
import {randRadius, randSpeed} from "./rand.js";
const speedCoeff = 3;
const smallBubbleRadius = 5;

export function control(evt, userBubble, canvas, bubbles) {
  let center = userBubble.center();
  let diffVec = { x: (center.x - evt.clientX), y: (center.y - evt.clientY) };
  let newVector = calcDiff(diffVec, canvas);
  let smallBubble = createClickBubble(evt, userBubble, diffVec);
  console.log(smallBubble);
  userBubble.turn(newVector);
  bubbles.push(smallBubble);
}

function calcDiff(diffVec, canvas) {
  let normalized = normalize(diffVec);
  let alignment = calcAlign(canvas)
  return {
    dX: Math.round(normalized.x * alignment.x),
    dY: Math.round(normalized.y * alignment.y)
  }
}

function calcAlign(canvas) {
  let canvasProp =  normalize({ x: canvas.width, y: canvas.height });
  return { x: canvasProp.y * speedCoeff, y: canvasProp.x * speedCoeff }
}

function normalize(vector) {
  let len = Math.sqrt((vector.x * vector.x) + (vector.y * vector.y))
  return { x: vector.x / len, y: vector.y / len }
}

// create small bubble with contr moveVector
function createClickBubble(evt, userBubble, diffVec) {
  let smallCenter = calcCenter(diffVec, userBubble);
  let moveVector = calcVector(diffVec);
  return new Bubble(smallCenter, moveVector)
}

function calcCenter(diffVec, userBubble) {
  let len = Math.sqrt((diffVec.x * diffVec.x) + (diffVec.y * diffVec.y))
  let bigRadius = userBubble.radius();
  let bigCenter = userBubble.center();
  let dX = diffVec.x * (bigRadius + smallBubbleRadius) / len;
  let dY = diffVec.y * (bigRadius + smallBubbleRadius) / len;
  return { x: bigCenter.x - dX, y: bigCenter.y - dY, radius: smallBubbleRadius }
}

function calcVector(diffVec) {
  let contrVector = { x: -diffVec.x, y: -diffVec.y };
  return normalize(contrVector)
}
