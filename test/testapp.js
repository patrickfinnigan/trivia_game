var questions = [{
    prompt: "answer is a",
    response: [
        "(a) hey", "(b) what", "(c) hey", "(d) huh"
    ],
    answer: 0
    // 0 is the index of the response array, where 0 is a, 1, is b, etc
},
{
    prompt: "answer is b",
    response: [
        "(a) hey", "(b) what", "(c) hey", "(d) huh"
    ],
    answer: 1
},
]

var currentQ = 0; // index of current question
var correctAnswers = 0; //tallies
var incorrectAnswers = 0; //tallies

$(document).ready(function(){

    // this function will display the current question and responses
    function displayQuestion() {
        $("#questionsDiv").empty()
        $("ul").empty();
        if (currentQ === questions.length) {
            $("#questionsDiv").text("Game Over");
        }
    var promptDisplay = $("<h1>")

    promptDisplay.html(questions[currentQ].prompt)
    // populates the html of promptDisplay with the questions array object correlated to the currentQ index number, and then grabs the prompt object inside that question object

    questions[currentQ].response.forEach((element, index) => {
        /* button.attr("type", "radio") */
        
        $("ul").append('<li><input type="radio" name="question_' + currentQ + '" value="' + index + '"/>' + element  + '</li>');
    });
    // simialr to the previous line of code but ask to clarify 

    $("#questionsDiv").append(promptDisplay)
/*     $("body").append(responseDisplay) */
    // the body element is appended with the displayObjects
}
    // submit button click handler
    $("#submit").on("click", function() {
        console.log('Response selected', $("[name=question_"+currentQ+"]:checked").val());
        var userGuess = $("[name=question_"+currentQ+"]:checked").val(); // gets the user input
        var correctAnswer = questions[currentQ].answer;
        console.log('userGuess', userGuess, 'CorrectAnswer', correctAnswer);
        if (Number(userGuess) === correctAnswer) {
            correctAnswers++;
        } else {
            incorrectAnswers++;
        }
        $("#correctAnswerTally").text(correctAnswers);
        $("#incorrectAnswerTally").text(incorrectAnswers);
        currentQ++;
        displayQuestion();
    })
    displayQuestion();
});