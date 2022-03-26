// Modifying Images - Part 2.

var image = new SimpleImage("hilton.jpg");

for (var pix of image.values()) {
  swapRedGreen(pix);
}

function swapRedGreen(pixel) {
  var temp = pixel.getGreen();
  pixel.setGreen(pixel.getRed());
  pixel.setRed(temp);
}

print(image);
