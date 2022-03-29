// Programming Exercise: Advanced Modifying Images - Part 3.

var img = new SimpleImage("hilton.jpg");
print(addBlackBorder(img, 10));

function setBlack(pixel) {
  pixel.setRed(0);
  pixel.setGreen(0);
  pixel.setBlue(0);
  return pixel;
}

function addBlackBorder(image, size) {
  for (var pix of image.values()) {
    var x = pix.getX();
    var y = pix.getY();
    if (
      x <= size ||
      x >= image.getWidth() - size ||
      y <= size ||
      y >= image.getHeight() - size
    ) {
      setBlack(pix);
    }
  }
  return image;
}
