/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
var arrQuestions = [];

function QuestionObject(question, answers, correctAnswer) {
    "use strict";
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

arrQuestions.push(new QuestionObject("what name?", ["flum", "dummo", "frittjof"], "dummo"));
arrQuestions.push(new QuestionObject("How are you?", ["good", "bad", "both"], "bad"));
arrQuestions.push(new QuestionObject("What color do I like?", ["red", "green", "yellow"], "yellow"));
arrQuestions.push(new QuestionObject("What city?", ["Stockholm", "London", "New York"], "Stockholm"));

console.log(arrQuestions);