//for each question, you have to make an object array of questions 
$(document).ready(function () {


    
    startTimer();

    $("#submit").show();
    $("#startOver").hide();

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
    var questionsLeft = 9;

    $(document).ready(function () {


        function endGame() {
            $("#questionsDiv").html("<h1>Game Over<h1>");
            $("#questionsDiv").append("<h2>You got " + correctAnswers + " out of 9 right</h2>")
            $("#submit").hide();
            $("#startOver").show();
            $("#buttonDisplay").empty();
        }

        $("#startOver").on("click", function () {

        });

        // this function will display the current question and responses
        function displayQuestion() {
            $("#questionsDiv").empty()
            $("ul").empty();
            if (currentQ === questions.length) {
                endGame();
                // the following will happen when you reach the end of the questions
            }
            var promptDisplay = $("<h1>")

            promptDisplay.html(questions[currentQ].prompt)
            // populates the html of promptDisplay with the questions array object correlated to the currentQ index number, and then grabs the prompt object inside that question object

            questions[currentQ].response.forEach((element, index) => {
                $("ul").append('<li><input type="radio" name="question_' + currentQ + '" value="' + index + '"/>' + element + '</li>');
            });
            // simialr to the previous line of code but ask to clarify 

            $("#questionsDiv").append(promptDisplay)
            // the body element is appended with the displayObjects
        }
        // submit button click handler
        $("#submit").on("click", function () {
            console.log('Response selected', $("[name=question_" + currentQ + "]:checked").val());
            var userGuess = $("[name=question_" + currentQ + "]:checked").val(); // gets the user input
            var correctAnswer = questions[currentQ].answer;
            console.log('userGuess', userGuess, 'CorrectAnswer', correctAnswer);
            if (Number(userGuess) === correctAnswer) {
                correctAnswers++;
                questionsLeft--;
                console.log(questionsLeft);
            } else {
                incorrectAnswers++;
                questionsLeft--;
                console.log(questionsLeft);
            }
            $("#correctAnswerTally").text(correctAnswers);
            $("#incorrectAnswerTally").text(incorrectAnswers);
            $("#questionsLeftTally").text(questionsLeft);
            currentQ++;
            displayQuestion();



        })
        displayQuestion();
    });


    function startTimer(duration, display) {
        var timer = duration,
            minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;
            } else if (timer === 0) {
                endGame();
            }

        }, 1000);
    }

    window.onload = function () {
        var threeMinutes = 60 * 3,
            display = document.querySelector('#time');
        startTimer(threeMinutes, display);
    };



    /*         $("questionsDiv").append("Press the Button To Start");

            var startQuiz = function () {

            }

            $("#submit").on("click", startQuiz); */
});



// things still needing work

// how to make the program play nice with the startup screen
// how to reset the entire jquery script to the beginning without reloading the page and placing that inside the startOver button
// reworking the timer so that it doesnt start working one second later than it should and not utilize its code one second sooner than it should
// how to have cut in screens telling the player if they got the answer right or wrong like in the homework