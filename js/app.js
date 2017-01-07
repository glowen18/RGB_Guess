var numSquares = 6;
var colors =  generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for(var i = 0; i < modeButtons.length; i++){
  modeButtons[i].addEventListener("click", function(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");

    this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      reset();
  });
}

function reset(){
  colors = generateRandomColors(numSquares);
//Pick a new random color as picked color from array
  pickedColor = pickColor();
//Change colorDisplay to match pickedColor
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
//Change colors of the squares
//Loop thru all squares
  for(var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "#233343";
}

resetButton.addEventListener("click", function(){
  reset();
});

//Displays color that is picked
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.background;

    if(clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct";
      resetButton.textContent = "Play Again?"
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    } else {

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
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for(var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
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
