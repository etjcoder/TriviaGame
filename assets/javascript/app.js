/////////////////LEFT TO DO 6-20-2019/////////////////
// 1.) Need to create creative questions
// 2.) Need to design website better
// 3.) Need to make a retake quiz game





///////////////Create global variables to match with Divs above here and functions below/////////////

//Timer variable
var timer = 30;
var newTimer;

//Start Button
var startButton = $("#start-button");

//Submit Button
var submitButton = $("#finish-game");

//Results block
var resultsDiv = $("#results");
//# Correct variable
var correct = 0;

//# Incorrect variable
var incorrect = 0;

//# Unanswered variable
var unanswered = 0;

//Empty array of answers
var guessedAnswers = [];
var correctAnswers = ["Five", "Alex Trebeck", "74", "1996", "2001", "25 million"];

//These are preset variables to not let functions run more than once
var executed = false;
var startClicked = false;
//////////////////////Create Functions to play the game//////////////

//Start Game variable, responds to button click on start-button and initiates game function
$(startButton).on("click", function () {
    
    //A If/Then statement to determine if the startButton has already been clicked
    if(startClicked === false) {

    //Upon click this will start your timer
    startTimer();
    console.log("you've started the game!");

    //Display the questions for your game
    $("#questions").css('display', 'block');

    //Sets startClicked to true so you can't activate this function again
    startClicked = true;
    }
});

//This will submit your answers before the timer hits 0.
$(submitButton).on("click", function () {
    timer = 0;
    answerChecker();

});


//This is the function that will evaluate your answers compared to the correct answers
function answerChecker() {
    // This will see if this answerChecker has been called yet
    if (executed === false) {

        //This sets variables "answer(n)" to the value submitted via the designated input
        var answer1 = $("input[name='choice1']:checked").val();
            console.log(answer1);
            //This pushes the user's chosen answer into an empty "guessAnswers" array.
            guessedAnswers.push(answer1);
        var answer2 = $("input[name='choice2']:checked").val();
            console.log(answer2);
            guessedAnswers.push(answer2);
        var answer3 = $("input[name='choice3']:checked").val();
            console.log(answer3);
            guessedAnswers.push(answer3);
        var answer4 = $("input[name='choice4']:checked").val();
            console.log(answer4);
            guessedAnswers.push(answer4);
        var answer5 = $("input[name='choice5']:checked").val();
            console.log(answer5);
            guessedAnswers.push(answer5);
        var answer6 = $("input[name='choice6']:checked").val();
            console.log(answer6);
            guessedAnswers.push(answer6);

            console.log(guessedAnswers);

        //This will run a loop to compare the newly completed guessedAnswers array to the preset correctAnswers array
        for (var i = 0; i < guessedAnswers.length; i++) {
            guessedAnswers[i];
            
            //if the answer is unanswered it will display undefined. undefined does not come up as a string so we had to use the boolean
            if (guessedAnswers[i] === undefined) {
                unanswered++;
                console.log("Unanswered: " + unanswered);
            }
            else if (guessedAnswers[i] === correctAnswers[i]) {
                correct++;
                console.log("Correct: " + correct);
            } else {
                incorrect++;
                console.log("Incorrect: " + incorrect);
            }

        }
        //This will push the increments correct/incorrect/unanswered variables into the global variables above and push it to the html
        $("#correct-answers").text(correct);
        $("#incorrect-answers").text(incorrect);
        $("#unanswered-answers").text(unanswered);

        //This will prevent us from being able to re-run the function
        executed = true;
    }
};


//Game function starts off by displaying the time in the window. Once the timer is displayed it is incremented by "--" every 1000 milliseconds.
//When time=0 we will run the answerChecker function which ends the quiz.

function startTimer() {
    //This will display the pre-set time variable in the html timer div
    $("#timer").text(timer);

    //This will run a function to remove 1 second from the timer per second
    setInterval(function () {
        //We will create a new variable which we will use to display the adjusted time by incrementing that down and constantly updating the div
        var newTimer = timer--;
        $("#timer").text(newTimer);
        
        //This checks if the newTimer variable = 0, and when it does it will end the game
        if (newTimer === 0) {
            
            //This was used for testing purposes
            console.log("Your game has ended")

            //This will hide the previously summoned questions container
            $("#questions").css('display', 'none');

            //This will show the previously hidden results container
            document.getElementById("results").style.display = "block";

            //Runs the result checker function
            answerChecker();
        }
    }, 1000);
}
