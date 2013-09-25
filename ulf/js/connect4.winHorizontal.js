/*jslint browser:true */
/*global BOARD: false, connect4: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
connect4.winHorizontal = function horizontal() {
    "use strict";
    var i,
        j,
        counterR,
        counterB;
    for (i = 0; i < BOARD.length; i = i + 1) {
        counterR = 0;
        counterB = 0;
        for (j = 0; j < BOARD[i].length; j = j + 1) {
            if (BOARD[i][j][1] === "R") {
                counterR = counterR + 1;
                counterB = 0;
                if (counterR === 4) {
                    break;
                }
            } else if (BOARD[i][j][1] === "B") {
                counterB = counterB + 1;
                counterR = 0;
                if (counterB === 4) {
                    break;
                }
            } else {
                counterR = 0;
                counterB = 0;
            }
        }
        if (counterR === 4 || counterB === 4) {
            return true;
        }
    }
    return false;
};