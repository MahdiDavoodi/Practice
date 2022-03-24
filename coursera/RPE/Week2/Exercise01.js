// Exercise 6 - Sum of the RGB values for a Pixel
function sumPixel(nameOfImage, xpos, ypos) {
    var img = new SimpleImage(nameOfImage);
    var pix = img.getPixel(xpos,ypos);
    return pix.getRed() + pix.getGreen() + pix.getBlue();
}

var answer = sumPixel("drewgreen.png", 250, 500);
print(answer);
answer = sumPixel("drewgreen.png",10, 10);
print(answer);