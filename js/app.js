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

//Hard codes picked color
var pickedColor = colors[3];

//Sets variable to pick a color by its ID
var colorDisplay = document.getElementById("colorDisplay");

//Displays color that is picked
colorDisplay.textContent = pickedColor;

//Loop thru all squares
for(var i = 0; i < squares.length; i++) {
  //Adds initial color to squares
  squares[i].style.background = colors[i];

  //Adds click listener to squares
  squares[i].addEventListener("click", function() {
    //Grab color of clicked squares
    var clickedColor = this.style.background;
    //And compare color to pickedColor
    if(clickedColor === pickedColor) {
      alert("Correct!");
    } else {
      alert("Wrong!");
    }
  });
}
