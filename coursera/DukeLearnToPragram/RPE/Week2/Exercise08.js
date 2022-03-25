// Exercise 1 - Turn the chapel red.

var image = new SimpleImage("chapel.png");

print(image);

for (var pix of image.values()) {
  pix.setRed(255);
}

print(image);
