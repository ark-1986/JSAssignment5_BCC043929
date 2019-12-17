// Write a function that calculates the area of a rectangle.

var widht = prompt("Enter the width of area");

var height = prompt("Enter the height of area")

function area(widht,height){
    return widht*height;
}
document.write("The area of a rectangle is : " + area(widht,height));