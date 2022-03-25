// Exercise 2 - Remove all the red

var image = new SimpleImage("chapel.png");

print(image);

for (var pix of image.values()) {
  pix.setRed(0);
}

print(image);
