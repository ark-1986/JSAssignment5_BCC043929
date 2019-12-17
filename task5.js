var userInput = parseInt(prompt("Enter the amount you wish to withdraw"));

function currencyNotes() {
    var hundNotes = Math.floor(userInput /100);
    var fifNotes = Math.floor((userInput % 100) /50);
    var tenNotes = Math.floor((userInput  % 100) % 50) /10;
    var remaiNotes = Math.floor(((userInput % 100) % 50) % 10);

    document.write("You will have "+hundNotes+" hundred notes "+
    fifNotes+" fifty notes and "+tenNotes+" ten notes ");
}
currencyNotes(userInput);