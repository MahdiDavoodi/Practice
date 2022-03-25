// Exercise 4 - Add Thick Black Line to Bottom of Owen

var image = new SimpleImage("astrachan.jpg");

print(image);

var max = image.getHeight() - 10;

for (var pix of image.values()) {
  if (pix.getY() > max) {
    pix.setRed(0);
    pix.setGreen(0);
    pix.setBlue(0);
  }
}

print(image);
