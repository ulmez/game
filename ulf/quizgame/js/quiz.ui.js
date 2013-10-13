/*jslint browser:true */
/*global $: false, quiz: false, num: true, score: true, arrQuestions: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */

quiz.ui = (function () {
    "use strict";
    return {
        onStart: function startSequence() {
            var liWidth = 0,
                i;
            $("h1").text("Do you want to play my quiz game?");

            $("#correctAnswer").hide();

            for (i = 0; i < 3; i = i + 1) {
                $("#answer" + i).hide();
            }

            $("#con").css({
                left: ($(window).width() / 2) - 300
            });

            liWidth = $("#yes").width() + $("#no").width() + 40;

            $(".menupos").width(liWidth);

            $("#con").animate({
                left: "-=" + $(window).width() + "px"
            }, 0).animate({
                left: "+=" + $(window).width() + "px"
            }, 1000); //.fadeOut("slow");
        },

        answers: function setAnswers() {
            var liWidth = 0,
                i;

            $("#yes").hide();
            $("#no").hide();

            for (i = 0; i < 3; i = i + 1) {
                $("#answer" + i).show();
            }

            $("h1").text(quiz.logic.questionText(num));

            arrQuestions[num].answers = _.shuffle(arrQuestions[num].answers);

            for (i = 0; i < 3; i = i + 1) {
                $("#answer" + i).text(quiz.logic.questionAnswers(num)[i]);
                //liWidth += $("#answer" + i).width() + 25;
            }

            liWidth = quiz.logic.widthUl(num);

            $(".menupos").width(liWidth);

            $("li").each(function (index) {
                $("#answer" + index).click(function () {
                    if ($("#buttonBlocker").hasClass("menu")) {
                        $("#buttonBlocker").removeClass("menu");
                        $("#buttonBlocker").addClass("blocked");
                        if ($(this).text() === quiz.logic.correctAnswer(num)) {
                            score += 1;
                            $("#correctAnswer").text("That was correct!");
                        } else {
                            $("#correctAnswer").text("Wrong, the right answer is: " + quiz.logic.correctAnswer(num));
                        }
                        $("#correctAnswer").show(); //.wait(3000).hide();
                        setTimeout(function () {
                            $("#correctAnswer").hide();
                        }, 3000);
                        $("#con").delay(3000).animate({
                            left: "-=" + $(window).width() + "px"
                        }, 1000).animate({
                            left: "+=" + $(window).width() + "px"
                        }, 1000);
                        setTimeout(function () {
                            //liWidth = 0;
                            $("#buttonBlocker").removeClass("blocked");
                            $("#buttonBlocker").addClass("menu");
                            if (num < arrQuestions.length - 1) {
                                num += 1;
                            } else {
                                num = 0;
                                if (score < arrQuestions.length && score > 0) {
                                    $("h1").html("Your final score is: " + score + " of " + arrQuestions.length + "<br />Do you want to play again?");
                                } else if (score === arrQuestions.length) {
                                    $("h1").html("Your final score is: " + score + " of " + arrQuestions.length + "<br />Well done!<br />Do you want to play again?");
                                } else {
                                    $("h1").html("Your final score is: " + score + " of " + arrQuestions.length + "<br />You are bad!<br />Do you want to play again?");
                                }
                                score = 0;
                                liWidth = $("#yes").width() + $("#no").width() + 40;
                                $(".menupos").width(liWidth);
                                for (i = 0; i < 3; i = i + 1) {
                                    $("#answer" + i).hide();
                                }
                                $("#yes").show();
                                $("#no").show();
                            }
                            if (num !== 0) {
                                $("h1").text(quiz.logic.questionText(num));
                                arrQuestions[num].answers = _.shuffle(arrQuestions[num].answers);
                                for (i = 0; i < 3; i = i + 1) {
                                    $("#answer" + i).text(quiz.logic.questionAnswers(num)[i]);
                                    //liWidth += $("#answer" + i).width() + 25;
                                }
                                liWidth = quiz.logic.widthUl(num);
                                $(".menupos").width(liWidth);
                                //$("#correctAnswer").text("Wrong, the right answer is: " + getCorrectAnswer(num));
                            }
                        }, 4000);
                    }
                });
            });

            $("#correctAnswer").text(quiz.logic.correctAnswer(num));
        },

        play: function playYesNo() {
            $("#yes").click(function () {
                arrQuestions = _.shuffle(arrQuestions);
                $("#con").animate({
                    left: "-=" + $(window).width() + "px"
                }, 1000).animate({
                    left: "+=" + $(window).width() + "px"
                }, 1000);
                setTimeout(function () {
                    quiz.ui.answers();
                }, 1000);
            });

            $("#no").click(function () {
                $("#con").animate({
                    left: "-=" + $(window).width() + "px"
                }, 1000).animate({
                    left: "+=" + $(window).width() + "px"
                }, 1000);
                setTimeout(function () {
                    $("#yes").hide();
                    $("#no").hide();
                    $("h1").text("Game Over");
                }, 1000);
            });
        },

        resizeWindow: function onResizeWindow() {
            $(window).resize(function () {
                $("#con").css({
                    left: ($(window).width() / 2) - 300
                });
            });
        }
    };
}());