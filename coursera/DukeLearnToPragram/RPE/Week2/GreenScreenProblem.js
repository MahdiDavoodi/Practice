// The green screen algorithm.

var bg = new SimpleImage("dinos.png");
var fg = new SimpleImage("drewRobert.png");

function merge(bg, fg) {
  if (bg.getWidth() != fg.getWidth() || bg.getHeight() != fg.getHeight())
    return "--> Failed: Images are not compatible!";

  var output = new SimpleImage(bg.getWidth(), bg.getHeight());

  for (var pix of output.values()) {
    var x = pix.getX();
    var y = pix.getY();

    if (
      fg.getPixel(x, y).getGreen() >
      fg.getPixel(x, y).getRed() + fg.getPixel(x, y).getBlue()
    ) {
      output.setPixel(x, y, bg.getPixel(x, y));
    } else {
      output.setPixel(x, y, fg.getPixel(x, y));
    }
  }

  print(output);

  return "--> Finished!";
}

print(merge(bg, fg));
