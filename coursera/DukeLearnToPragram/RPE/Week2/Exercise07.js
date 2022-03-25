// Exercise - Turning an image yellow - For loops

print(turnYellow(new SimpleImage(200, 200)));
print(turnMagenta(new SimpleImage(200, 200)));

function turnYellow(img) {
  for (var pix of img.values()) {
    pix.setRed(255);
    pix.setGreen(255);
  }
  return img;
}

function turnMagenta(img) {
  for (var pix of img.values()) {
    pix.setRed(255);
    pix.setBlue(255);
  }
  return img;
}
