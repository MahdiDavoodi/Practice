// Exercise 7 - Changes in Red

function changeRed(width, height) {
  var picture = new SimpleImage(width, height);
  var red = 0;

  for (var pix of picture.values()) {
    if (red > 255) red = 0;
    pix.setRed(red);
    red++;
  }

  return picture;
}

var result = changeRed(256, 200);
print(result);
