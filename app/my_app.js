import {Circle} from "shapes/circle.js";
let circle = new Circle(100, 100, 50);

function resizeCanvas() {
  var canvas = document.getElementById("canvas");
  canvas.width = document.body.clientWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas()

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

function animate(circle, canvas, context, startTime) {
  // update
  var time = (new Date()).getTime() - startTime;

  var linearSpeed = 0.1;
  var verticalSpeed = 1;
  // pixels / second
  var dX = linearSpeed * time / 1000;
  var dY = verticalSpeed * time / 1000;
  // clear
  // meet wall
  if (!(circle.meetCanvas(canvas))) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    circle.moveCenterBy(dX, dY);
    circle.drawInContext(context);
  }
  // request new frame
  requestAnimationFrame(function() {
    animate(circle, cnvs, ctx, startTime);
  });
}

setTimeout( function() {
    var startTime = (new Date()).getTime();
    animate(circle, cnvs, ctx, startTime);
    }, 1000
  );
