/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
var size = 50;

function opponent(size, pos_x, pos_y, id) {
    "use strict";
    //this.size = size;
    //this.speed = speed;
    window.addEventListener("DOMContentLoaded", function () {
        var body = document.querySelector("body"),
            ball = document.createElement("div");
        //size = 50;
        //ball.innerText = "Hej hopp!";
        body.appendChild(ball);
        ball.style.position = "fixed";
        ball.style.height = size + "px";
        ball.style.width = size + "px";
        ball.style.backgroundColor = "yellow";
        ball.style.border = "solid 1px black";
        ball.id = id;
        ball.style.left = pos_x + "px";
        ball.style.top = pos_y + "px";
    });
}

function opponentPlacement() {
    "use strict";
    var posX = window.innerWidth - (size + 2),
        posY = window.innerHeight - (size + 2);
    opponent(size, 0, 0, 0);
    opponent(size, posX, posY, 1);
}

function opponentResize() {
    "use strict";
    window.addEventListener("resize", function () {
        var op1 = document.getElementById("0"),
            op2 = document.getElementById("1"),
            posX = window.innerWidth - (size + 2),
            posY = window.innerHeight - (size + 2);
        op1.style.left = "0px";
        op1.style.top = "0px";
        op2.style.left = posX + "px";
        op2.style.top = posY + "px";
        //console.log(posX);
        //console.log(posY);
    });
}

function setSize(s) {
    "use strict";
    window.addEventListener("DOMContentLoaded", function () {
        size = s;
        var op1 = document.getElementById("0"),
            op2 = document.getElementById("1"),
            posX = window.innerWidth - (size + 2),
            posY = window.innerHeight - (size + 2);
        op1.style.left = "0px";
        op1.style.top = "0px";
        op1.style.height = size + "px";
        op1.style.width = size + "px";
        op2.style.left = posX + "px";
        op2.style.top = posY + "px";
        op2.style.height = size + "px";
        op2.style.width = size + "px";

        //console.log(posX);
        //console.log(posY);
    });
}

function moveOpponent(op, up, down) {
    "use strict";
    window.addEventListener("DOMContentLoaded", function () {
        var op1 = document.getElementById("0").style,
            op2 = document.getElementById("1").style,
            speed = 10,
            pos,
            leftover;
        if (op === "op1") {
            pos = op1;
        } else {
            pos = op2;
        }
        window.addEventListener("keydown", function (e) {
            //console.log(e.keyIdentifier);
            switch (e.keyIdentifier) {
            case up:
                if (parseInt(pos.top, 10) > 0) {
                    if (parseInt(pos.top, 10) < speed) {
                        pos.top = parseInt(pos.top, 10) - parseInt(pos.top, 10) + "px";
                    } else {
                        pos.top = parseInt(pos.top, 10) - speed + "px";
                    }
                }
                break;
            case down:
                leftover = ((window.innerHeight - size) - parseInt(pos.top, 10) - 2);
                if (parseInt(pos.top, 10) < window.innerHeight - size) {
                    if (leftover < speed) {
                        pos.top = parseInt(pos.top, 10) + leftover + "px";
                    } else {
                        pos.top = parseInt(pos.top, 10) + speed + "px";
                    }
                }
                break;
            }
        });
    });
}

window.addEventListener("keypress", function (e) {
    "use strict";
    //console.log(e.keyIdentifier);
    if (e.keyCode !== 13) {
        //chars.push(e.key);
        console.log(e.key);
    }
});

opponentPlacement();
opponentResize();
moveOpponent("op1", "U+0041", "U+005A");
moveOpponent("op2", "Up", "Down");
//setSize(200);