// Exercise 3 - Turn the eggs less red.

var image = new SimpleImage("eastereggs.jpg");

print(image);

for (var pix of image.values()) {
  if (pix.getRed() > 70) pix.setRed(70);
}

print(image);
