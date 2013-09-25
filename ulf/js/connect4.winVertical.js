/*jslint browser:true */
/*global BOARD: false, connect4: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
connect4.winVertical = function fourInRowVerticalCheck() {
    "use strict";
    var i,
        j,
        counterR,
        counterB;
    for (i = 0; i < BOARD.length + 1; i = i + 1) {
        counterR = 0;
        counterB = 0;
        for (j = 0; j <= BOARD.length - 1; j = j + 1) {
            if (BOARD[j][i][1] === "R") {
                counterR = counterR + 1;
                counterB = 0;
                if (counterR === 4) {
                    break;
                }
            } else if (BOARD[j][i][1] === "B") {
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