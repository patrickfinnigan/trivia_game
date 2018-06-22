//for each question, you have to make an object array of questions 
$(document).ready(function () {

    $("#submit").hide();
    $("#startOver").hide();
    $("#start").show();

    var questions = [{
            prompt: "In the Dark Tower III: The Waste Lands, Roland and his Ka Tet escape the city of Lud by boarding this sadistic, riddle-loving train. What was this train's name?",
            response: [
                "(a) Blaine the Mono", "(b) Atmos MkV Engine", "(c) Thomas The Freight Engine", "(d) Tetsuo Liner"
            ],
            answer: 0
            // 0 is the index of the response array, where 0 is a, 1, is b, etc
        },
        {
            prompt: "In the Discworld: Night Watch, the failed revolution of Treacle Mine Road is remembered by wearing...",
            response: [
                "(a) a rose", "(b) lilac", "(c) lavendar", "(d) a fig leaf"
            ],
            answer: 1
        },        {
            prompt: "The belief that everything, including Earth, you, even this quiz game, and especially your memories, were all instantaniously made very recently. This idea is commonly known by this term.",
            response: [
                "(a) Sudden Apperance Theory", "(b) The Spotinaity Theory", "(c) The Quick-Start Bang", "(d) Last Thusday-ism"
            ],
            answer: 3
        },        {
            prompt: "In Jojo's Bizarre Adventure: Vento Aureo, Bruno Bucciarati has the ability to manifest _________ on anything he chooses.",
            response: [
                "(a) rocks", "(b) cloth", "(c) zippers", "(d) paper"
            ],
            answer: 2
        },        {
            prompt: "How do you treat a jellyfish sting?",
            response: [
                "(a) use hot water", "(b) use vinegar", "(c) use urine", "(d) use milk"
            ],
            answer: 1
        },        {
            prompt: "This pokemon is known for having incredible defense.",
            response: [
                "(a) Shuckle", "(b) Dunsparce", "(c) Qwilfish", "(d) Stantler"
            ],
            answer: 0
        },        {
            prompt: "Mariya Takeuchi released her hit single 'Plastic Love', in what year?",
            response: [
                "(a) 1994", "(b) 1988", "(c) 1999", "(d) 1984"
            ],
            answer: 3
        },        {
            prompt: "Which of the following is not like the others?",
            response: [
                "(a) glass", "(b) water", "(c) mirror", "(d) vodka"
            ],
            answer: 2
        },        {
            prompt: "Was this quiz hard?",
            response: [
                "(a) Yes", "(b) Yes", "(c) Yes", "(d) Yes"
            ],
            answer: 0
        },
    ]


    var currentQ = 0; // index of current question
    var correctAnswers = 0; //tallies
    var incorrectAnswers = 0; //tallies
    var questionsLeft = 9;

    $(document).ready(function () {

        // this function will display the current question and responses
        function displayQuestion() {
            $("#start").hide();
            $("#submit").show();
            $("#questionsDiv").empty()
            $("ul").empty();
            if (currentQ === questions.length) {
                endGame();
                // the following will happen when you reach the end of the questions
            }
            var promptDisplay = $("<h2>")

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
        // displayQuestion();
        $("#start").on("click", function () {
            displayQuestion();
            var threeMinutes = 60 * 3,
                display = document.querySelector('#time');
            startTimer(threeMinutes, display);
        });

        $("#startOver").on("click", function () {
            currentQ = 0; // index of current question
            correctAnswers = 0; //tallies
            incorrectAnswers = 0; //tallies
            questionsLeft = 9;
            displayQuestion();
            var threeMinutes = 60 * 3,
                display = document.querySelector('#time');
            startTimer(threeMinutes, display);
            $("#startOver").hide();
        });
    });

    var setTimer;

    function startTimer(duration, display) {
        var timer = duration,
            minutes, seconds;

        setTimer = setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            console.log(timer);


            if (--timer < -1) {
                timer = duration;
            } else if (timer === -1) {
                endGame();
                console.log("timer equals " + timer)
            }

        }, 1000);


    }

    function endGame() {
        $("#questionsDiv").html("<h1>Game Over<h1>");
        $("#questionsDiv").append("<h2>You got " + correctAnswers + " out of 9 right</h2>")
        $("#submit").hide();
        $("#startOver").show();
        $("#buttonDisplay").empty();
        clearInterval(setTimer);
        clockRunning = false;
    }


});