// add weeks in current date
function addweek(add){
    var currdate = new Date();
    currdate.setDate(currdate.getDate() + add*7);
    return document.write(currdate,"<br>");
}
addweek(3);
addweek(7);