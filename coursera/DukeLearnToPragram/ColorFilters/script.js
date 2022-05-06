var image = null;
var result = null;
var canvas = document.getElementById("canvas");

function loadImage() {
  var input = document.getElementById("input");
  var info = document.getElementById("info");
  image = new SimpleImage(input);
  image.drawTo(canvas);
}

function resetPage() {
  canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
  if (imageIsReady()) image.drawTo(canvas);
}

function displayResult() {
  if (result != null) {
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    result.drawTo(canvas);
  }
}

function redFilter() {
  if (imageIsReady()) {
    result = new SimpleImage(image);
    changeColors(255, -1, -1);
  }
  displayResult();
}

function blueFilter() {
  if (imageIsReady()) {
    result = new SimpleImage(image);
    changeColors(-1, -1, 255);
  }
  displayResult();
}

function greenFilter() {
  if (imageIsReady()) {
    result = new SimpleImage(image);
    changeColors(-1, 255, -1);
  }
  displayResult();
}

function grayFilter() {
  if (imageIsReady()) {
    result = new SimpleImage(image);
    var average = 0;
    for (var pix of result.values()) {
      average = (pix.getRed() + pix.getGreen() + pix.getBlue()) / 3;
      pix.setRed(average);
      pix.setBlue(average);
      pix.setGreen(average);
    }
  }
  displayResult();
}

function changeColors(r, g, b) {
  for (var pix of result.values()) {
    if (r >= 0) pix.setRed(r);
    if (g >= 0) pix.setGreen(g);
    if (b >= 0) pix.setBlue(b);
  }
}

function imageIsReady() {
  if (image == null) return false;
  else return true;
}

/*
 * Didn't finish this last one. The width and height have problems and implementing rainbow filter is impossible without them.
 * I don't have time for this. And I already know it.
 * It's time to focus on mobile dev.
 */
