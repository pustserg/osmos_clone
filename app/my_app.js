import {Bubble} from "bodies/bubble.js";
let bubble = new Bubble([200, 200, 20], [3, 5]);

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

window.requestAnimationFrame = function(callback) {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
         window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
         window.msRequestAnimationFrame || function(callback) {
           window.setTimeout(callback, 1000 / 60);
         };

}();

function animate(bubble, canvas, context, startTime) {
  // update
  var time = (new Date()).getTime() - startTime;

  bubble.move(context)
  // request new frame
  requestAnimationFrame(function() {
    animate(bubble, cnvs, ctx, startTime);
  });
}

setTimeout( function() {
    var startTime = (new Date()).getTime();
    animate(bubble, cnvs, ctx, startTime);
    }, 1000
  );
