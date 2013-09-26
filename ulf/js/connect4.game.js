/*jslint browser:true */
/*global X_CORD: false, Y_CORD: false, BOARD: false, connect4: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
connect4.game = (function () {
    "use strict";
    return {
        playerTurn: function (p) {
            var slotLocal = "";
            while (isNaN(slotLocal) || slotLocal < 1 || slotLocal > 7) {
                if (p === "R") {
                    slotLocal = prompt("Pick slot 1 - 7 red player");
                } else {
                    slotLocal = prompt("Pick slot 1 - 7 blue player");
                }
            }
            slotLocal = Number(slotLocal) - 1;
            if (BOARD[0][slotLocal][1] === "-") {
                connect4.set.slot(slotLocal, p);
                console.clear();
                console.log(connect4.get.playground(1));
                return true;
            }
            alert("This slot is full, take another one");
            return false;
        },
        play: function play() {
            var player = "R",
                playYesNo = "",
                theEndText = "%cBye bye!",
                design = "color: #000; font-weight:bold; font-size: 5em";
            while (playYesNo !== "y" && playYesNo !== "n") {
                playYesNo = prompt("Do you want to play \"Four In Row?\"\n\"Y\" for YES, \"N\" for NO");
                playYesNo = playYesNo.toLowerCase();
            }
            if (playYesNo === "y") {
                connect4.set.board(X_CORD, Y_CORD);
                console.log(connect4.get.playground(1));
                while (!connect4.winning() && !connect4.draw()) {
                    if (player === "R") {
                        if (connect4.game.playerTurn(player)) {
                            if (!connect4.winning()) {
                                player = "B";
                            }
                        }
                    } else if ((player === "B")) {
                        if (connect4.game.playerTurn(player)) {
                            if (!connect4.winning()) {
                                player = "R";
                            }
                        }
                    }
                    if (player === "R" && connect4.winning() && !connect4.draw()) {
                        alert("Player red wins!");
                    } else if (player === "B" && connect4.winning() && !connect4.draw()) {
                        alert("Player blue wins!");
                    } else if (connect4.draw()) {
                        alert("It's a draw!");
                    }
                    if (connect4.winning() || connect4.draw()) {
                        playYesNo = "";
                        while (playYesNo !== "y" && playYesNo !== "n") {
                            playYesNo = prompt("Do you want to play again?\n\"Y\" for YES, \"N\" for NO");
                            playYesNo = playYesNo.toLowerCase();
                        }
                        if (playYesNo === "y") {
                            connect4.set.board(X_CORD, Y_CORD);
                            console.clear();
                            console.log(connect4.get.playground(1));
                            player = "R";
                        } else {
                            console.clear();
                            console.log(theEndText, design);
                        }
                    }
                }
            } else {
                console.log(theEndText, design);
            }
        }
    };
}());