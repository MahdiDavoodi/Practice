// Exercise 5 - Print the RGB values of a pixel
function printPixel(nameImage, xpos, ypos) {
    var img = new SimpleImage(nameImage);
    var pix = img.getPixel(xpos,ypos);
    print("red = " + pix.getRed());
    print("green = " + pix.getGreen());
    print("blue = " + pix.getBlue());
}

printPixel("drewgreen.png",10, 10);
printPixel("drewgreen.png",250, 500);