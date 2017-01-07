var colors =  generateRandomColors(6);
// Select all squares
var squares = document.querySelectorAll(".square");
//Hard codes picked color
var pickedColor = pickColor();
//Sets variable to pick a color by its ID
var colorDisplay = document.getElementById("colorDisplay");
//Sets message Display
var messageDisplay = document.querySelector("#message")

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
      messageDisplay.textContent = "Correct";
      changeColors(clickedColor);
    } else {
// When wrong square clicked, it disappears (fades to background color)
      this.style.background = "#233343";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color) {
//Loop thru all squares
  for(var i = 0; i < squares.length; i++) {
//Change each color to match pickedColor
  squares[i].style.background = color;
  }
}

function pickColor() {
//Picks random number from remaining number of squares
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
//make an array of random colors
  var arr = [];
//Loop thru the array 'num times'
  for(var i = 0; i < num; i++) {
//Get random color from randomColor function & push into array
    arr.push(randomColor());
  }
//return that array
  return arr;
}

function randomColor() {
//Pick a "red from 0 to 255"
  var r = Math.floor(Math.random() * 256);
//Pick a "green from 0 to 255"
  var g = Math.floor(Math.random() * 256);
//Pick a "blue from 0 to 255"
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
