/*jslint browser:true */
/*global $: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
var arrQuestions = [];

function QuestionObject(question, answers, correctAnswer) {
    "use strict";
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

function getQuestionText(num) {
    "use strict";
    return arrQuestions[num].question;
}

function getQuestionAnswers(num) {
    "use strict";
    return arrQuestions[num].answers;
}

function getCorrectAnswer(num) {
    "use strict";
    return arrQuestions[num].correctAnswer;
}

// UI delen-----------------------------------------

function startSequence() {
    "use strict";
    $("#con").css({
        left: ($(window).width() / 2) - 300
    });
    $("#con").animate({
        left: "-=" + $(window).width() + "px"
    }, 0).animate({
        left: "+=" + $(window).width() + "px"
    }, 1000);
}

function onResizeWindow() {
    "use strict";
    $(window).resize(function () {
        $("#con").css({
            left: ($(window).width() / 2) - 300
        });
    });
}

function setAnswers(num) {
    "use strict";
    var i,
        liWidth = 0;

    $("h1").text(getQuestionText(num));

    $("li").each(function (index) {
        $("#answer" + index).remove();
    });

    for (i = 0; i < getQuestionAnswers(num).length; i = i + 1) {
        $(".menu").append('<li id="answer' + i + '"></li>');
        //$("#placeholderAnswers").append('<span id="answer' + i + '"></span>');
        $("#answer" + i).text(getQuestionAnswers(num)[i]);
        liWidth += $("#answer" + i).width() + 20;
    }

    $(".center").width(liWidth);

    $("li").each(function (index) {
        $("#answer" + index).click(function () {
            $("#con").animate({
                left: "-=" + $(window).width() + "px"
            }, 1000).animate({
                left: "+=" + $(window).width() + "px"
            }, 1000);
        });
    });

    $("#correctAnswer").text(getCorrectAnswer(num));
}
// -------------------------------------------------

arrQuestions.push(new QuestionObject("Paraguay has borders with Brazil, Bolivia and which other country?", ["Argentina", "Colombia", "Ecuador"], "Argentina"));
arrQuestions.push(new QuestionObject("What is the capital city of Afghanistan?", ["Bombay", "Kabul", "Tehran"], "Kabul"));
arrQuestions.push(new QuestionObject("Which band recorded the soundtrack to the first Highlander film?", ["Rush", "Primus", "Queen"], "Queen"));
arrQuestions.push(new QuestionObject("Which actor had the lead role in Enter the dragon?", ["Errol Flynn", "Bruce Lee", "Mike Myers "], "Bruce Lee"));

startSequence();
onResizeWindow();

//setAnswers(0);
setAnswers(1);
//setAnswers(2);
//setAnswers(3);

//console.log(arrQuestions);
//console.log(getQuestionText(0));
//console.log(getQuestionAnswers(0));
//console.log(getCorrectAnswer(0));