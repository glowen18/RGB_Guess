var colors =  [
  "rgb(255, 0, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 0, 255)",
  "rgb(0, 255, 255)",
  "rgb(255, 255, 50)",
  "rgb(255, 0, 255)",
]
// Select all squares
var squares = document.querySelectorAll(".square");

//Loop thru all squares
for(var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
}
