/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
var size = 50,
    current_keys = [],
    key_timer,
    key = "",
    keyCode = "",
    keyCode1 = "",
    keyCode2 = "",
    counter = 0,
    i,
    j;

window.addEventListener("DOMContentLoaded", function () {
    "use strict";

    function opponent(size, pos_x, pos_y, id) {
        var body = document.querySelector("body"),
            ball = document.createElement("div");
        body.appendChild(ball);
        ball.style.position = "fixed";
        ball.style.height = size + "px";
        ball.style.width = size + "px";
        ball.style.backgroundColor = "yellow";
        ball.style.border = "solid 1px black";
        ball.id = id;
        ball.style.left = pos_x + "px";
        ball.style.top = pos_y + "px";
    }

    function opponentPlacement() {
        //"use strict";
        var posX = window.innerWidth - (size + 2),
            posY = window.innerHeight - (size + 2);
        opponent(size, 0, 0, 0);
        opponent(size, posX, posY, 1);
    }

    function keyPressEvents() {
        window.addEventListener("keypress", function (event) {
            keyCode1 = String.fromCharCode(event.keyCode);
            var isValidKey = (
                keyCode1 === "a" || keyCode1 === "s" ||
                keyCode1 === "d" || keyCode1 === "j" ||
                keyCode1 === "k" || keyCode1 === "l" ||
                keyCode1 === "q"
            );

            if (isValidKey) {
                current_keys.push(keyCode1);
            }

            for (i = 0; i < current_keys.length; i = i + 1) {
                for (j = 0; j < current_keys.length; j = j + 1) {
                    if (current_keys[i] === current_keys[j] && j !== i) {
                        current_keys.splice(j, 1);
                    }
                }
            }
        });
    }

    function keyUpEvents() {
        window.addEventListener("keyup", function (event) {
            keyCode = (String.fromCharCode(event.keyCode)).toLowerCase();

            for (i = 0; i < current_keys.length; i = i + 1) {
                if (keyCode === current_keys[i]) {
                    current_keys.splice(i, 1);
                }
            }
        });
    }

    function quit() {
        var op1 = document.getElementById("0"),
            op2 = document.getElementById("1");
        for (i = 0; i < current_keys.length; i = i + 1) {
            if (current_keys[i] === "q") {
                op1.parentNode.removeChild(op1);
                op2.parentNode.removeChild(op2);
                counter = 0;
                return true;
            }
        }
        return false;
    }

    function playersMoves() {
        var op1 = document.getElementById("0").style,
            op2 = document.getElementById("1").style,
            speed = 5,
            //pos,
            lastKeyPress1,
            lastKeyPress2,
            leftover;

        for (i = 0; i < current_keys.length; i = i + 1) {
            if (current_keys[i] === "s" || current_keys[i] === "d") {
                lastKeyPress1 = current_keys[i];
            }
            if (current_keys[i] === "j" || current_keys[i] === "k") {
                lastKeyPress2 = current_keys[i];
            }
        }

        if (lastKeyPress1 === "s") {
            if (parseInt(op1.left, 10) > 0) {
                if (parseInt(op1.left, 10) < speed) {
                    op1.left = parseInt(op1.left, 10) - parseInt(op1.left, 10) + "px";
                } else {
                    op1.left = parseInt(op1.left, 10) - speed + "px";
                }
            }
        } else if (lastKeyPress1 === "d") {
            leftover = ((window.innerWidth - size) - parseInt(op1.left, 10) - 2);
            if (parseInt(op1.left, 10) < window.innerWidth - size) {
                if (leftover < speed) {
                    op1.left = parseInt(op1.left, 10) + leftover + "px";
                } else {
                    op1.left = parseInt(op1.left, 10) + speed + "px";
                }
            }
        }

        if (lastKeyPress2 === "j") {
            if (parseInt(op2.left, 10) > 0) {
                if (parseInt(op2.left, 10) < speed) {
                    op2.left = parseInt(op2.left, 10) - parseInt(op2.left, 10) + "px";
                } else {
                    op2.left = parseInt(op2.left, 10) - speed + "px";
                }
            }
        } else if (lastKeyPress2 === "k") {
            leftover = ((window.innerWidth - size) - parseInt(op2.left, 10) - 2);
            if (parseInt(op2.left, 10) < window.innerWidth - size) {
                if (leftover < speed) {
                    op2.left = parseInt(op2.left, 10) + leftover + "px";
                } else {
                    op2.left = parseInt(op2.left, 10) + speed + "px";
                }
            }
        }
    }

    function booter() {
        (function boot() {
            keyPressEvents();
            keyUpEvents();
            console.log(current_keys);

            playersMoves();

            if (quit()) {
                return false;
            }
            setTimeout(boot, 1000 / 24);
        }());
        return true;
    }

    function start() {
        window.addEventListener("keypress", function (event) {
            keyCode2 = String.fromCharCode(event.keyCode);
            if (keyCode2 === " " && counter === 0) {
                counter = 1;
                opponentPlacement();
                booter();
            }
        });
    }

    start();
});