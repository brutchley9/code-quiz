var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsleft = 45

//function for 60sec timer, activated when button on webpage is clicked

function setTime() {
    var timerInterval = setInterval(function() {
        secondsleft--;
        timeEl.textContent = secondsleft + " seconds left!"
        if (secondsleft === 0) {
            clearInterval(timerInterval);
            
            sendMessage();
        }
    }, 1000);
}

//Time's Up notification when clock runs out. Both of these functions run concurrent after start button is clicked

function sendMessage() {
    timeEl.textContent = "Time's Up!"
}

//questions will be presented with an array of objects within let declarations

let questionOne = {
    first: "debugging",
    firstSelections: ["JavaScript", "Terminal", "Console.log", "for loops"],
    firstRight: 2
}