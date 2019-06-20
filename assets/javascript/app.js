// * You'll create a trivia form with multiple choice or true/false options (your choice).

// * The player will have a limited amount of time to finish the quiz. 

//   * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

// * Don't let the player pick more than one answer per question.

// * Don't forget to include a countdown timer.


///////////////Create global variables to match with Divs above here and functions below/////////////

//Timer variable
var timer = 10;
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



//////////////////////Create Functions to play the game//////////////

//Start Game variable, responds to button click on start-button and initiates game function

$(startButton).on("click", function () {

    //Upon click this will start your timer
    startTimer();
    console.log("you've started the game!");

    //Display the questions for your game
    $("#questions").css('display', 'block');

});

$(submitButton).on("click", function() {

    var answer1 = $("input[name='choice1']:checked").val();
    console.log(answer1);

    if (answer1 === "undefined"){
        unanswered++;
    }
    else if(answer1 === "Red"){
        correct++;
        console.log(correct);
    } else {
        incorrect++;
    }


    // console.log(correct);
    $("#correct-answers").text(correct);
    $("#incorrect-answers").text(incorrect);
    $("#unanswered-answers").text(unanswered);
});

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
        }


    }, 1000);

}



    //Inside the functoin it will collect form data and then put the answer into a "chosen-option" variable
    //Push these options into an array called chosenArr

        //Perhaps have answers in an array
        //Loop through array and compare chosen-option[i] to correct-answer[i] 
        //if option === undefined {unanswered++}, else if option ===  answer then correct++, else incorrect++, 

        //end game function hides the div with the questions and then makes a new div show that has the number correct into it
