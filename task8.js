function agecal(dob){
    var dob = prompt("Enter you date of birth to get details:\n Example: Jan 1 1970" );     // Jan 1 1970
    var date = new Date(dob);
    var year1 = date.getFullYear();
    var month1 = date.getMonth();
    var day1 = date.getDate();

    var currdate = new Date();
    var year2 = currdate.getFullYear();
    var month2 = currdate.getMonth();
    var day2 = currdate.getDate();

    var diffyear = year2-year1;
    var diffmonth = month2-month1;
    var diffday = day2-day1;
    
    document.write("You are "+diffyear+" years, "+diffmonth+" month and "+diffday+" days old")

}

agecal();
