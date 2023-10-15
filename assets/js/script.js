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

//questions will be presented as an array of objects within let declarations. Correct object within each array is labeled with its corresponding location within array (0, 1, 2, 3)
//next step, to add a corresponding function for each question, as well as an "onclick" to make them interactive

let questionOne = {
    first: "A very useful tool used during web development and debugging for printing content to the debugger is:",
    firstSelections: ["JavaScript", "Terminal", "Console.log", "For Loops"],
    firstRight: 2
}

let questionTwo = {
    second: "String values must be enclosed within ______ when being assigned to variables",
    secondSelections: ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
    secondRight: 2
}

let questionThree = {
    third: "data",
    thirdSelections: ["String", "Alerts", "Boolean", "Numbers"],
    thirdRight: 1
}

let questionFour = {
    fourth: "arrays",
    fourthSelections: ["Numbers/Strings", "Other Arrays", "Booleans", "All of the Above"],
    fourthRight: 3
}

let questionFive = {
    fifth: "lotr",
    fifthSelections: ["The Fellowship of the Ring", "The Two Towers", "The Return of the King", "All of the Above"],
    fifthRight: 3
}




function beginQuestionTwo(questionTwo) {

    let secondQuestion = document.getElementById("second");

    secondQuestion.textContent = questionTwo.second

    let secondSelect = document.querySelectorAll(".secondSelections")
    secondSelect.forEach(function(element, index){
        element.textContent = questionTwo.secondSelections[index]

        element.addEventListener('click', function() {
            if(questionTwo.secondRight == index) {
                console.log("Right!")

            }
            else {
                console.log("Wrong!")
            }
        })
    })


}

function beginQuestionOne(questionOne) {

    let firstQuestion = document.getElementById("first");

    firstQuestion.textContent = questionOne.first

    let firstSelect = document.querySelectorAll(".firstSelections")
    firstSelect.forEach(function(element, index){
        element.textContent = questionOne.firstSelections[index]

        element.addEventListener('click', function() {
            if(questionOne.firstRight == index) {
                console.log("Right!")
                beginQuestionTwo(questionTwo)
            }
            else {
                console.log("Wrong!")
                beginQuestionTwo(questionTwo)
            }
        })
    })
}

