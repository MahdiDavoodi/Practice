var paintcanvas = document.getElementById("canvas");
var context = paintcanvas.getContext("2d");
var color = "black";
var radius = 50;
var isPainting = false;

function changeWidth(value) {
  if (!isNaN(value)) paintcanvas.width = value;
  else alert("This is not a number.");
}

function changeHeight(value) {
  if (!isNaN(value)) paintcanvas.height = value;
  else alert("This is not a number.");
}

function clearCanvas() {
  context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function startPaint() {
  isPainting = true;
}

function endPaint() {
  isPainting = false;
}

function doPaint(x, y) {
  if (isPainting) paintCircle(x, y);
}

function changeColor(value) {
  color = value;
}

function paintCircle(x, y) {
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2, true);
  context.fillStyle = color;
  context.fill();
}

function changeSize(value) {
  document.getElementById("size").value = value;
  radius = value;
}

function reset() {
  context.fillStyle = "White";
  context.fillRect(0, 0, paintcanvas.width, paintcanvas.height);
}
