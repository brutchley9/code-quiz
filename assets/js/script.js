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

function sendEndMessage() {
    timeEl.textContent = "Quiz Over!"
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
    third: "Commonly used data types do NOT include:",
    thirdSelections: ["String", "Alerts", "Boolean", "Numbers"],
    thirdRight: 1
}

let questionFour = {
    fourth: "Arrays in JavaScript can be used to store:",
    fourthSelections: ["Numbers/Strings", "Other Arrays", "Booleans", "All of the Above"],
    fourthRight: 3
}

let questionFive = {
    fifth: "The greatest film in the Peter Jackson 'Lord of the Rings' Trilogy is:",
    fifthSelections: ["The Fellowship of the Ring", "The Two Towers", "The Return of the King", "All of the Above"],
    fifthRight: 3
}

//down below is a function for each corresponding question. The first begins when the start button is clicked (onclick event in index), then each subsequent question begins when the one before it is answered (right or wrong)

function beginQuestionFive(questionFive) {

    let fifthQuestion = document.getElementById("fifth");

    fifthQuestion.textContent = questionFive.fifth

    let fifthSelect = document.querySelectorAll(".fifthSelections")
    fifthSelect.forEach(function(element, index){
        element.textContent = questionFive.fifthSelections[index]

        element.addEventListener('click', function() {
            if(questionFive.fifthRight == index) {
                console.log("Right!");

                clearInterval(timerInterval);
                sendEndMessage();

            }
            else {
                console.log("Wrong!");

                clearInterval(timerInterval);
                sendEndMessage();
            }
        })
    })


}

function beginQuestionFour(questionFour) {

    let fourthQuestion = document.getElementById("fourth");

    fourthQuestion.textContent = questionFour.fourth

    let fourthSelect = document.querySelectorAll(".fourthSelections")
    fourthSelect.forEach(function(element, index){
        element.textContent = questionFour.fourthSelections[index]

        element.addEventListener('click', function() {
            if(questionFour.fourthRight == index) {
                console.log("Right!");
                beginQuestionFive(questionFive);
                document.getElementById("fifth").scrollIntoView({behavior: "smooth"});

            }
            else {
                console.log("Wrong!");
                beginQuestionFive(questionFive);
                document.getElementById("fifth").scrollIntoView({behavior: "smooth"});
                secondsleft -= 5;
            }
        })
    })


}



function beginQuestionThree(questionThree) {

    let thirdQuestion = document.getElementById("third");

    thirdQuestion.textContent = questionThree.third

    let thirdSelect = document.querySelectorAll(".thirdSelections")
    thirdSelect.forEach(function(element, index){
        element.textContent = questionThree.thirdSelections[index]

        element.addEventListener('click', function() {
            if(questionThree.thirdRight == index) {
                console.log("Right!");
                beginQuestionFour(questionFour);
                document.getElementById("fourth").scrollIntoView({behavior: "smooth"});

            }
            else {
                console.log("Wrong!");
                beginQuestionFour(questionFour);
                document.getElementById("fourth").scrollIntoView({behavior: "smooth"});
                secondsleft -= 5;
            }
        })
    })


}

function beginQuestionTwo(questionTwo) {

    let secondQuestion = document.getElementById("second");

    secondQuestion.textContent = questionTwo.second

    let secondSelect = document.querySelectorAll(".secondSelections")
    secondSelect.forEach(function(element, index){
        element.textContent = questionTwo.secondSelections[index]

        element.addEventListener('click', function() {
            if(questionTwo.secondRight == index) {
                console.log("Right!");
                beginQuestionThree(questionThree);
                document.getElementById("third").scrollIntoView({behavior: "smooth"});

            }
            else {
                console.log("Wrong!");
                beginQuestionThree(questionThree);
                document.getElementById("third").scrollIntoView({behavior: "smooth"});
                secondsleft -= 5
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
                console.log("Right!");
                beginQuestionTwo(questionTwo);
                document.getElementById("second").scrollIntoView({behavior: "smooth"});
            }
            else {
                console.log("Wrong!");
                beginQuestionTwo(questionTwo);
                document.getElementById("second").scrollIntoView({behavior: "smooth"});
                secondsleft -= 5
            }
        })
    })
}

