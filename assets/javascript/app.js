//for each question, you have to make an object array of questions 
$(document).ready(function () {

    var score = 0;

    $("button").click(function () {
        $("div").html("Hello <b>world</b>!");
    });



    var questions = [{
            prompt: "answer is a",
            response: [
                "(a) hey", "(b) what", "(c) hey", "(d) huh"
            ],
            answer: "c"
        },
        {
            prompt: "answer is c\n(a) hey\n(b) what\n(c) hey\n(d) huh",
            answer: "c"
        },
    ]

    // set up a for loop to make the program run through each of the questions
    for (let i = 0; i < questions.length; i++) {
        var currentQ = $(".question-card");
        currentQ.append(`<h3>${questions[0].prompt}</h3>`);
        if (response == questions[i].answer) {
            score++;
            alert("correct");
        } else {
            alert("wrong");
        }
    }
    alert("you got " + score + "/" + questions.length)





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
            }

        }, 1000);
    }

    window.onload = function () {
        var threeMinutes = 60 * 3,
            display = document.querySelector('#time');
        startTimer(threeMinutes, display);
    };

});