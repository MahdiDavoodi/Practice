// Modifying Images - Part 3.

var image = new SimpleImage("duke_blue_devil.png");

for (var pix of image.values()) {
  swapBlueYellow(pix);
}

function swapBlueYellow(pixel) {
  if (pixel.getBlue() > 150 && pixel.getRed() < 50 && pixel.getGreen() < 80) {
    pixel.setBlue(0);
    pixel.setGreen(255);
    pixel.setRed(255);
  }
}

print(image);

// This is not perfect. But it works!
