import {Bubble} from "bodies/bubble.js";
import {randRadius, randSpeed} from "helpers/rand.js"
let bubbles = [];
bubbles.push(new Bubble({x: 200, y: 200, radius: 20}, { x: 3, y: 5 }));

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
  var circleAttrs = { x: evt.clientX, y: evt.clientY, radius: randRadius() }
  var randMoveVector = { x: randSpeed(), y: randSpeed() }
  bubbles.push(new Bubble(circleAttrs, randMoveVector));
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
  bubbles.forEach(function(bubble){
    bubble.move(context);
  });
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
