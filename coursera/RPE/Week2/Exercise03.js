// Exercise 4 - Perimeter of an image
function perimeter(imageName) {
    var img = new SimpleImage(imageName);
    return (img.getWidth() * 2) + (img.getHeight() * 2);
}

print(perimeter("rodger.png"));