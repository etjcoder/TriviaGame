// * You'll create a trivia form with multiple choice or true/false options (your choice).

// * The player will have a limited amount of time to finish the quiz. 

//   * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

// * Don't let the player pick more than one answer per question.

// * Don't forget to include a countdown timer.

/////////////////LEFT TO DO 6-20-2019/////////////////
// 1.) Need to create creative questions
// 2.) Need to design website better
// 3.) Need to make a retake quiz game





///////////////Create global variables to match with Divs above here and functions below/////////////

//Timer variable
var timer = 30;
var newTimer;

//Question 1-6 variables
var question1 = "What color is an Apple?";
var question2 = "";
var question3 = "";
var question4 = "";
var question5 = "";
var question6 = "";

//Options 1-6 variables
var option1 = ["blue", "red", "orange", "purple"];
var option2 = "";
var option3 = "";
var option4 = "";
var option5 = "";
var option6 = "";

//Answers 1-6 variables
var answer1 = "red";
var answer2 = "";
var answer3 = "";
var answer4 = "";
var answer5 = "";
var answer6 = "";

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
var executed = false;
var startClicked = false;
//////////////////////Create Functions to play the game//////////////

//Start Game variable, responds to button click on start-button and initiates game function

$(startButton).on("click", function () {
    if(startClicked === false) {
    //Upon click this will start your timer
    startTimer();
    console.log("you've started the game!");

    //Display the questions for your game
    $("#questions").css('display', 'block');
    startClicked = true;
    }
});

$(submitButton).on("click", function () {
    timer = 0;
    answerChecker();

});

function answerChecker() {
    if (executed === false) {

        var answer1 = $("input[name='choice1']:checked").val();
            console.log(answer1);
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

        for (var i = 0; i < guessedAnswers.length; i++) {
            guessedAnswers[i];
            
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
        $("#correct-answers").text(correct);
        $("#incorrect-answers").text(incorrect);
        $("#unanswered-answers").text(unanswered);
        executed = true;
    }
};




////////////// FOR LOOP CODE ////////////


//     var answers = [];
// console.log(answers)
//     for (var i = 0; i < 5; i++) {
//         answers[i] = $("input[name='choice1']:checked").val();
//         answers.push(answers[i]);
//     }
//  console.log(answers);

/////////// THIS WILL LOG RIGHT OR WRONG ANSWERS

// console.log(correct);

//Game function starts off by setting a time that when time=0 runs function endGame
function startTimer() {

    //This will display the pre-set time in the timer div
    // console.log("timer has started")
    $("#timer").text(timer);

    //This will run a function to remove 1 second from the timer per second
    setInterval(function () {

        //This will create a new variable which we will use to display the adjusted time
        // console.log("minus 1");
        var newTimer = timer--;
        $("#timer").text(newTimer);
        if (newTimer === 0) {
            console.log("Your game has ended")
            // newTimer = 10;

            //Hide the Questions container
            $("#questions").css('display', 'none');
            //Show the Results container
            document.getElementById("results").style.display = "block";

            //Runs the result checker function
            answerChecker();
        }


    }, 1000);

}
