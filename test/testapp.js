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

var currentQ = 0

$(document).ready(function(){

    var promptDisplay = $("<h1>")

    promptDisplay.html(questions[currentQ].prompt)
    // populates the html of promptDisplay with the questions array object correlated to the currentQ index number, and then grabs the prompt object inside that question object

    questions[currentQ].response.forEach(element => {
        var button = $('<input type="radio"/>');
        /* button.attr("type", "radio") */
        
        $("ul").appendTo("<li>"+button+"</li>");
    });
    // simialr to the previous line of code but ask to clarify 

    $("body").append(promptDisplay)
/*     $("body").append(responseDisplay) */
    // the body element is appended with the displayObjects

});