// Exercise 5 - Green square in top left corner

var image = new SimpleImage("chapel.png");

print(image);

for (var pix of image.values()) {
  if (pix.getX() <= 50 && pix.getY() <= 50) {
    pix.setRed(0);
    pix.setGreen(255);
    pix.setBlue(0);
  }
}

print(image);
