var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

easyButton.addEventListener("click", function(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    document.getElementById("shown").hidden = false;
    document.getElementById("hidden").hidden = true;
    reset(3);
});

hardButton.addEventListener("click", function(){
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    document.getElementById("shown").hidden = false;
    document.getElementById("hidden").hidden = false;
    reset(6);
});

resetButton.addEventListener("click", function(){
    reset(6);
    document.getElementById("shown").hidden = false;
    document.getElementById("hidden").hidden = false;
});

function reset(num){
    colors = generateRandomColors(num);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < num; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor =  "rgba(98, 148, 252, 0.7)";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Game";
}

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
    // to add colors to squares
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            winGameHandler(clickedColor);
        }else {
            loseGameHandler();
        }
    });
}

function loseGameHandler() {
    this.style.backgroundColor = "#232323";
    messageDisplay.textContent = "Try Again!";
}

function winGameHandler(clickedColor) {
    changeColors(clickedColor);
    messageDisplay.textContent = "Correct!";
    h1.style.backgroundColor = clickedColor;
    resetButton.textContent = "Play Again?";
}

function changeColors(color){
    for (var i = 0; i < squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for (var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    // pick a red from 0-255
    var r = Math.floor(Math.random() * 256);
    // pick a green from 0-255
    var g = Math.floor(Math.random() * 256);
    // pick a blue from 0-255
    var b = Math.floor(Math.random() * 256);
    // "rgb (r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
