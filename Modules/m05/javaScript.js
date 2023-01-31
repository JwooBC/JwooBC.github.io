var table = prompt("Pick a number from 0 to 10"); // Unit of table
var i = 0; // Set counter to 1
var msg = '<h2>Multiplication Table</h2>'; // Message

// Do multiplication
while (i <= 10) {
  msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
  i++;
}


// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;

