 //GIVEN I am taking a code quiz
// start button to start the game
// THEN a timer starts and I am presented with a question
//need a timer
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score


// tutoring 


 // startGame() 
    // start game screen will hide
    // questions will show
    // start a timer
    // run askQuestion()
 // askQuestion() 
    // get first question from the questions array
    // display title on page
    // looop over choices array, and create a button for each choice
 // answerClicked()
    // check if wrong
        // take time away
        // display wrong feedback
    // else 
        // display right feedback
    // move to next question
    // if statement o check if we are out of questions or we have run out of time
        // if we have, run endGame()
        // else run askQuesiton again 
 // endGame()
    // stop the timer
    // show the edn screen
    // hide the questions screen

 // saveHighScore()