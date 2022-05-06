var background = null;
var foreground = null;
var leftCanvas = document.getElementById("leftCanvas");
var rightCanvas = document.getElementById("rightCanvas");

function loadBg() {
  var input = document.getElementById("bgInput");
  background = new SimpleImage(input);
  background.drawTo(leftCanvas);
}

function loadFg() {
  var input = document.getElementById("fgInput");
  foreground = new SimpleImage(input);
  foreground.drawTo(rightCanvas);
}

function clearCanvas() {
  leftCanvas
    .getContext("2d")
    .clearRect(0, 0, leftCanvas.width, leftCanvas.height);
  rightCanvas
    .getContext("2d")
    .clearRect(0, 0, rightCanvas.width, rightCanvas.height);
}

function start() {
  if (imagesAreLoaded() && imagesAreCompatible()) {
    var result = new SimpleImage(foreground.getWidth(), foreground.getHeight());
    for (var pixel of foreground.values()) {
      if (pixel.getGreen() >= pixel.getRed() + pixel.getBlue()) {
        result.setPixel(
          pixel.getX(),
          pixel.getY(),
          background.getPixel(pixel.getX(), pixel.getY())
        );
      } else {
        result.setPixel(pixel.getX(), pixel.getY(), pixel);
      }
    }
    result.drawTo(rightCanvas);
    alert("Done!");
  } else alert("ERROR: Aborted!");
}

function imagesAreLoaded() {
  if (
    background == null ||
    foreground == null ||
    !background.complete() ||
    !foreground.complete()
  ) {
    alert("Please load images first!");
    return false;
  } else return true;
}

function imagesAreCompatible() {
  if (
    background.getWidth() != foreground.getWidth() ||
    background.getHeight() != foreground.getHeight()
  ) {
    alert("Images are not compatible! They should have the same size!");
    return false;
  } else return true;
}

/* By Mahdi Davoodi
 * Tested with:
 * -> https://www.dukelearntoprogram.com/course1/example/dinos.png
 * -> https://www.dukelearntoprogram.com/course1/example/drewRobert.png
 */
