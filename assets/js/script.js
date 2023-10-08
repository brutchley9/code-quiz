var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsleft = 60

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

function sendMessage() {
    timeEl.textContent = "Time's Up!"
}

setTime();