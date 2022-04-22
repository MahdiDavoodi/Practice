var original = null;
var modified = null;

function upload() {
  var canvas = document.getElementById("original");
  var input = document.getElementById("file");
  original = new SimpleImage(input);
  original.drawTo(canvas);
}

function applyGray() {
  if (modified != null || canvas != null) modified.drawTo();
  if (original == null) alert("You should upload an image!");
  else {
    modified = original;
    for (var pixel of modified.values()) {
      var average = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
      pixel.setRed(average);
      pixel.setBlue(average);
      pixel.setGreen(average);
    }
    var canvas = document.getElementById("modified");
    modified.drawTo(canvas);
  }
}
