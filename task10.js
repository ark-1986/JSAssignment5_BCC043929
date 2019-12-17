
function vowelfind(str){

var input = prompt("Type a sting to get the quantity of vowels : ");
var lower = input.toLowerCase();
var vowelscount = 0;
for (var i=0; i<lower.length; i++){
switch (lower.charAt(i)){
    case "a":
    case "e":
    case "i":
    case "o":
    case "i":
    vowelscount += 1;
    break;

}
} 
alert ("Your typed String " + input + " has "+  vowelscount + " vowels.");
}


vowelfind();