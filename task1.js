// Find out factorial
function factorial(n){
    if (n==0){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}
document.write("Factorial of 8 = " + factorial(8), "<br>");
document.write("Factorial of 5 = " + factorial(5), "<br>");
document.write("Factorial of 9 = " + factorial(9));