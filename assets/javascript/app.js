//for each question, you have to make an object array of questions 
$(document).ready(function () {
    startTimer();

    $(".btn-secondary").text("Submit Answer");

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

        // this function will display the current question and responses
        function displayQuestion() {
            $("#questionsDiv").empty()
            $("ul").empty();
            if (currentQ === questions.length) {
                $("#questionsDiv").html("<h1>Game Over<h1>");
                $(".btn-secondary").text("Start Over");
                $("#buttonDisplay").empty();
                $("#submit").on("click", function () {
                    startTimer();
                    displayQuestion();
                });
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
            } else if (timer == 0) {
                $("#questionsDiv").html("<h1>Game Over<h1>");
                $(".btn-secondary").text("Start Over");
                $("#buttonDisplay").empty();
            }

        }, 1000);
    }

    window.onload = function () {
        var threeMinutes = 60 * 3,
            display = document.querySelector('#time');
        startTimer(threeMinutes, display);
    };


    /*     
        $("questionsDiv").text("Press the Button To Start");

        var startQuiz = function () {

        }

        $("#submit").on("click", startQuiz); */
});