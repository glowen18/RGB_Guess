var numSquares = 6;
var colors =  generateRandomColors(numSquares);
// Select all squares
var squares = document.querySelectorAll(".square");
//Hard codes picked color
var pickedColor = pickColor();
//Sets variable to pick a color by its ID
var colorDisplay = document.getElementById("colorDisplay");
//Sets message Display
var messageDisplay = document.querySelector("#message")
//Set h1 so the background color change to correct color picked
var h1 = document.querySelector("h1");
//Sets the button with id reset to reset the game
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function(){
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++) {
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function(){
//When click on button generates all new colors
  colors = generateRandomColors(numSquares);
//Pick a new random color as picked color from array
  pickedColor = pickColor();
//Change colorDisplay to match pickedColor
  colorDisplay.textContent = pickedColor;
  this.textContent = "New Colors";
  messageDisplay.textContent = "";
//Change colors of the squares
//Loop thru all squares
  for(var i = 0; i < squares.length; i++) {
//Adds initial color to squares
  squares[i].style.background = colors[i];
  }
  h1.style.background = "#233343";
})

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
      resetButton.textContent = "Play Again?"
      changeColors(clickedColor);
      h1.style.background = clickedColor;
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
