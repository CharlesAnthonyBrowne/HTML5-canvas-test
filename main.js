// =================================================
// DELCARE VARIABLES
// =================================================
var canvas = document.getElementById("canvas_one");
var ctx = canvas.getContext("2d");
var imageObj = new Image();
var w = $('#c-wrapper').width();
var h = $('html').height();
canvas.width = w;
canvas.height = h;

// =================================================
// OUR ONCLICK FUNCTIONS THAT CALL OUR DRAW METHODS
// =================================================
$('.happy_emoji').click(function(){
  drawMain();
});
$('.sad_emoji').click(function(){
  drawTwo();
});
$('.okay_emoji').click(function(){
  drawThree();
});
// =================================================
// DRAW FUNCTIONS
// =================================================
function drawMain() {
  imageObj.onload = function() {
    ctx.drawImage(imageObj, 0, 0
    );
  };
  imageObj.src = 'http://www.planwallpaper.com/static/images/20-Amazing-and-Cool-Background-For-Desktop-13.jpg';
};
// =================================================
function drawTwo() {
  ctx.fillStyle="#00FF00";
  ctx.beginPath();

  ctx.moveTo(0,0);
  ctx.lineTo(50,0);
  ctx.lineTo(10,150);
  ctx.closePath();
  ctx.fill();
};
// =================================================
function drawThree() {
  ctx.fillStyle="#A2322E";
  ctx.beginPath();

  ctx.moveTo(250,110);
  ctx.lineTo(350,10);
  ctx.lineTo(500,200);
  ctx.closePath();
  ctx.fill();
};
// =================================================
