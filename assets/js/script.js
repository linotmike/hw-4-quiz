// variables to keep track of game
var currentQuestionIndex = 0;
//var timer = questions.length * 15;
var timerId;
var timeInterval = setInterval;

// variables for dom elements

var startScreen = document.querySelector("#start-screen");
var endScreen = document.querySelector("#end-screen");
var timerElement = document.querySelector("#time");
var startBtn = document.querySelector("#start-game");
var questionsElement = document.getElementById("questions");
var answerElement = document.getElementById("answers");
var feedback = document.querySelector("#feedback");
var timeLeft = 75;
var submitBtn = document.querySelector("#submit");
timerId;

var highscore = [];

var questions = [
  {
    title: "How many continents are there?",
    choices: ["6", "7", "9", "5"],
    answer: "7",
  },
  {
    title: "What is the closest planet to the sun ?",
    choices: ["mercury", "mars", "pluto", "jupiter"],
    answer: "mercury",
  },
  {
    title: "How many players are there in a soccer team ?",
    choices: ["9", "14", "11", "15"],
    answer: "11",
  },
  {
    title: "What is a baby kangaroo called ?",
    choices: ["joey", "poly", "stevie", "kangee"],
    answer: "joey",
  },
  {
    title: "How many legs do insects have ?",
    choices: ["six", "seven", "four", "three"],
    answer: "six",
  },
  {
    title: "What is a baby kangaroo called ?",
    choices: ["joey", "poly", "stevie", "kangee"],
    answer: "joey",
  },
  {
    title: "how many colors of rainbow are there ?",
    choices: ["six", "seven", "four", "three"],
    answer: "seven",
  },
];

// var answersContainer = document.getElementById("answers");

function startGame() {
  startScreen.setAttribute("class", "hide");

  questionsElement.removeAttribute("class");

  countdown();

  showQuestion();
}

startBtn.onclick = startGame;

function showQuestion() {
  var currentQuestion = questions[currentQuestionIndex];

  var questionTitle = document.getElementById("question-title");
  questionTitle.textContent = currentQuestion.title;

  answerElement.innerHTML = "";

  for (let index = 0; index < currentQuestion.choices.length; index++) {
    const choice = currentQuestion.choices[index];

    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("value", choice);

    choiceBtn.textContent = choice;

    answerElement.appendChild(choiceBtn);
  }
}

function answerClicked(event) {
  var buttonElement = event.target;

  if (buttonElement.value !== questions[currentQuestionIndex].answer) {
    timeLeft -= 15;

    feedback.textContent = "wrong";
  } else {
    feedback.textContent = "correct";
  }

  currentQuestionIndex++;

  if (currentQuestionIndex === questions.length) {
    endGame();
    console.log("end game");
  } else {
    showQuestion();
  }
}

answerElement.onclick = answerClicked;
// answerElement.addEventListener("click", answerClicked)

var randomQuestions = questions[Math.floor(Math.random() * questions.length)];
console.log(randomQuestions);

// function init() {

//    var saveHighscore = JSON.parse(localStorage.getItem("highscore"));
//    if (saveHighscore !== null) {

//       timeLeft= saveHighscore
//  renderhighscore()
//    }

// }

submitBtn.onclick = saveHighScore;

function countdown() {
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerElement.textContent = "Time :" + timeLeft;
    console.log(timeLeft);

    if (timeLeft <= 0) {
      timeLeft = 0;
      clearInterval(timeInterval);
      endGame();

      //       // displayMessage();
    }
  }, 1000);
}
// //countdown();
// create function that calls another function hwo many times x milli seconds i want to do something
// var howEverManyTimesIWantThisFunctionToRun = 60;
// var userInital = null;
// var timerText = `Time : ${howEverManyTimesIWantThisFunctionToRun}`;
// function howEverManyTimesIWant() {
//    //displayQuiz();
//    var tickerCount = setInterval(() => {
//       if (howEverManyTimesIWantThisFunctionToRun > 0) {

//          howEverManyTimesIWantThisFunctionToRun--;
//          timerElement.textContent = timerText;
//          console.log(timerText);
//       } else if (howEverManyTimesIWantThisFunctionToRun === 0) {
//          clearInterval(tickerCount);
//          howEverManyTimesIWantThisFunctionToRun = 60;
//          highscore.push(howEverManyTimesIWantThisFunctionToRun);
//          userInital=prompt("please enter your initials to save highscore");

//       }
//    },1000);
// }

// startBtn.addEventListener("click" , function(event){
//    console.log(event.target);
//    howEverManyTimesIWant();
// })
function endGame() {
  // timeLeft = 0;
  clearInterval(timeInterval);

  //   if (currentQuestionIndex === questions.length || timeLeft <= 0) {
  //     clearInterval();
  //     console.log("end game");
  //   }

  questionsElement.setAttribute("class", "hide");
  endScreen.removeAttribute("class");
  // document.getElementById("wrong").addEventListener("click", function(){

  //timeLeft -=15;

  // })
}

// function displayMessage()
function saveHighScore() {
  var saveHighscore = JSON.parse(localStorage.getItem("highscore")) || [];
  var initials = prompt("Enter your initals to save highscore:");
  var newScore = {
    initials:initials,
    score:timeLeft
  };
  saveHighscore.push(newScore);
  localStorage.setItem("highscore", JSON.stringify(saveHighscore));
  renderLeaderboard()
}

function renderLeaderboard () {
   // get highscores from ls
   // hide end screen
   // show leaderboard
   // for each score
      // create li
      // put initials and score into li
      // appen to page

}

// var questionsArr

// run askQuestion()
// askQuestion()
// get first question from the questions array

// document.getElementById("choices").textContent = questions
//var randomQuestionsArr = randomQuestions.
//console.log(randomQuestionsArr);

// display title on page
// looop over choices array, and create a button for each choice
// answerClicked()
// check if wrong
// take time away
// display wrong feedback
// else
// display right feedback
// move to next question
// if statement to check if we are out of questions or we have run out of time
// if we have, run endGame()
// else run askQuesiton again
// endGame()
// stop the timer
// show the edn screen
// hide the questions screen
// assign a var boolean

// saveHighScore()
