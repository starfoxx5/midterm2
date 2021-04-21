// Get input from user
//ask user input for number btwn 5,000 - 5,000,000
const userNumber = Number(prompt("Enter a number between 5,000 - 5,000,000:"));

// Get id out ouput element
const divOutput = document.getElementById("output");

// Create a paragraph with the user's input
const paraElement = document.createElement("p");

// Add paragraph to HTML page
divOutput.appendChild(paraElement);

// Create table element for html
const tbleElement = document.createElement("table");

console.log(userNumber);
//roll of dice
/* Input calcuation */
let die1 = Number(prompt("Enter a number:"));
let die2 = Number(prompt("Enter another number:"));

console.log(`${die1} + ${die2} = ${die1 + die2}`);

// table
function tableCreate() {
  var body = document.body,
    tbl = document.createElement("table");
  tbl.style.width = "100px";
  tbl.style.border = "1px solid black";

  for (var i = 0; i < 13; i++) {
    var tr = tbl.insertRow();
    for (var j = 0; j < 2; j++) {
      if (i == 2 && j == 1) {
        break;
      } else {
        var td = tr.insertCell();
        td.appendChild(document.createTextNode(""));
        td.style.border = "1px solid black";
        if (i == 1 && j == 1) {
          td.setAttribute("rowSpan", "2");
        }
      }
    }
  }
  body.appendChild(tbl);
}
tableCreate();
