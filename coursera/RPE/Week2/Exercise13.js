// Exercise 6 - Rectangle of any color in top right corner

function topRightCorner(
  cornerWidth,
  cornerHeight,
  someImage,
  red,
  green,
  blue
) {
  var imgW = someImage.getWidth() - cornerWidth;
  var imgH = cornerHeight;

  for (var pix of someImage.values()) {
    if (pix.getX() > imgW && pix.getY() < imgH) {
      pix.setRed(red);
      pix.setGreen(green);
      pix.setBlue(blue);
    }
  }

  return someImage;
}

var picture = new SimpleImage("chapel.png");
var result = topRightCorner(30, 60, picture, 255, 255, 0);
print(result);
var picture2 = new SimpleImage("smalllion.jpg");
var result2 = topRightCorner(125, 20, picture2, 255, 0, 0);
print(result2);
