import {Bubble} from "bodies/bubble.js";
import {randRadius, randSpeed} from "helpers/rand.js";
import {control} from "helpers/control.js";
const userBubbleParams = { x: 300, y: 200, radius: 30  }
const userBubbleSpeed = { x: randSpeed(), y: randSpeed() }

let bubbles = [];
let userBubble = new Bubble(userBubbleParams, userBubbleSpeed);

function resizeCanvas() {
  var canvas = document.getElementById("canvas");
  canvas.width = document.body.clientWidth;
  canvas.height = window.innerHeight - 10;
}

resizeCanvas();
window.onresize = function(){
  resizeCanvas();
};
let cnvs = document.getElementById("canvas");
let ctx = cnvs.getContext("2d");

cnvs.addEventListener('click', function(evt) {
  control(evt, userBubble, cnvs, bubbles);
});

window.requestAnimationFrame = function(callback) {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
         window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
         window.msRequestAnimationFrame || function(callback) {
           window.setTimeout(callback, 1000 / 60);
         };

}();

function animate(bubbles, canvas, context, startTime) {
  // update
  var time = (new Date()).getTime() - startTime;
  // clear
  context.clearRect(0, 0, canvas.width, canvas.height);
  // move NPC bubbles
  bubbles.forEach(function(bubble){
    bubble.move(context);
  });
  // move user bubble
  userBubble.move(context)
  // request new frame
  requestAnimationFrame(function() {
    animate(bubbles, cnvs, ctx, startTime);
  });
}

setTimeout( function() {
    var startTime = (new Date()).getTime();
    animate(bubbles, cnvs, ctx, startTime);
    }, 1000
  );
