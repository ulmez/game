/*jslint browser:true */
/*global quiz: false, arrQuestions: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */

quiz.logic = (function () {
    "use strict";
    return {
        QuestionClass: function QuestionObject(question, answers, correctAnswer) {
            this.question = question;
            this.answers = answers;
            this.correctAnswer = correctAnswer;
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

        initQuestionObjects: function () {
            //arrQuestions.push(new quiz.logic.QuestionClass("what name fghdfg fdgdf?", ["flum", "dummo", "frittjof"], "dummo"));
            //arrQuestions.push(new quiz.logic.QuestionClass("How are you fgd fgdfh dfg dfg?", ["good", "bad", "both"], "bad"));
            //arrQuestions.push(new quiz.logic.QuestionClass("What color do I like dfg hdfgh dfg fg?", ["red", "green", "yellow"], "yellow"));
            //arrQuestions.push(new quiz.logic.QuestionClass("What city dfh fdgh dffgh?", ["Stockholm", "London", "New York"], "Stockholm"));
            arrQuestions.push(new quiz.logic.QuestionClass("How many Mr Olympia titles have Arnold won?", ["5", "7", "9"], "7"));
            arrQuestions.push(new quiz.logic.QuestionClass("In which country was Arnold born?", ["Austria", "Germany", "Holland"], "Austria"));
            arrQuestions.push(new quiz.logic.QuestionClass("What year did arnold become the governor of california?", ["2002", "2003", "2004"], "2003"));
            arrQuestions.push(new quiz.logic.QuestionClass("In which movie did arnold become pregnant?", ["twins", "true lies", "junior"], "junior"));
            arrQuestions.push(new quiz.logic.QuestionClass("What is the name of Arnolds wife?", ["Maria Shriver", "Anna Shriver", "Sharon Shriver"], "Maria Shriver"));
        }
        //How many Mr Olympia titles have Arnold won? 5 *7 9
        //In which country was Arnold born? *Austria, Germany, Holland
        //What year did arnold become the governor of california? 2002, *2003, 2004?
        //In which movie did arnold become pregnant? twins, true lies, *junior
        //What is the name of Arnolds wife? *Maria Shriver, Anna Shriver, Sharon Shriver
    };
}());