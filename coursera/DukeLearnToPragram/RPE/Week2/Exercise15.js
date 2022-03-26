// Modifying Images - Part 1.

var image = new SimpleImage("hilton.jpg");
var width = image.getWidth() / 3;

for (var pixel of image.values()) {
  if (pixel.getX() < width) {
    pixel.setRed(255);
  } else if (pixel.getX() < width * 2) {
    pixel.setGreen(255);
  } else {
    pixel.setBlue(255);
  }
}

print(image);
