/*jslint browser:true */
/*global quiz: false, arrQuestions: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */

quiz.logic = (function () {
    "use strict";
    return {
        QuestionClass: function QuestionObject(question, answers, correctAnswer, widthUl) {
            this.question = question;
            this.answers = answers;
            this.correctAnswer = correctAnswer;
            this.widthUl = widthUl;
        },

        questionText: function getQuestionText(num) {
            return arrQuestions[num].question;
        },

        questionAnswers: function getQuestionAnswers(num) {
            return arrQuestions[num].answers;
        },

        correctAnswer: function getCorrectAnswer(num) {
            return arrQuestions[num].correctAnswer;
        },

        widthUl: function getWidthUl(num) {
            return arrQuestions[num].widthUl;
        },

        initQuestionObjects: function () {
            arrQuestions.push(new quiz.logic.QuestionClass("what name fghdfg fdgdf?", ["flum", "dummo", "frittjof"], "dummo", 196));
            arrQuestions.push(new quiz.logic.QuestionClass("How are you fgd fgdfh dfg dfg?", ["good", "bad", "both"], "bad", 156));
            arrQuestions.push(new quiz.logic.QuestionClass("What color do I like dfg hdfgh dfg fg?", ["red", "green", "yellow"], "yellow", 173));
            arrQuestions.push(new quiz.logic.QuestionClass("What city dfh fdgh dffgh?", ["Stockholm", "London", "New York"], "Stockholm", 262));
        }
    };
}());