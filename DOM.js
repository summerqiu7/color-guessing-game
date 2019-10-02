
var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
var resetButton = document.querySelector("#reset");
var p1Numbers = document.querySelector("#p1Numbers");
var p2Numbers = document.querySelector("#p2Numbers");
var numberInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver =false;
var winningScore = 5;


p1button.addEventListener("click",function(){
    if (!gameOver){
        p1Score++;
        if(p1Score === winningScore){
         gameOver = true;
         p1Numbers.classList.add("winner");
        }
        p1Numbers.textContent = p1Score;
    }
});

p2button.addEventListener("click",function(){
    if(!gameOver){
        p2Score++;
        if (p2Score === winningScore){
        gameOver = true;
        p2Numbers.classList.add("winner");
        }
        p2Numbers.textContent = p2Score;
    }
});

resetButton.addEventListener("click", function(){
reset()
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Numbers.textContent = 0;
    p2Numbers.textContent = 0;
    p1Numbers.classList.remove("winner");
    p2Numbers.classList.remove("winner");
    gameOver = false;
}

numberInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = numberInput.value;
    winningScore = Number(numberInput.value);
    reset();
});