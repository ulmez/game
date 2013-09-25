/*jslint browser:true */
/*global BOARD: false, connect4: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
connect4.winDiagonalForward = function fourInRowDiagonalForwardCheck() {
    "use strict";
    var i,
        j,
        x,
        k,
        counterR,
        counterB;
    for (i = 0; i < BOARD.length; i = i + 1) {
        for (j = 0; j < BOARD[i].length; j = j + 1) {
            counterR = 0;
            counterB = 0;
            if (BOARD[i][j][1] !== "-" && i + 3 < BOARD.length && j + 3 < BOARD[i].length) {
                x = i;
                for (k = j; k < j + 4; k = k + 1) {
                    if (BOARD[x][k][1] === "R") {
                        counterR = counterR + 1;
                        counterB = 0;
                        if (counterR === 4) {
                            break;
                        }
                    } else if (BOARD[x][k][1] === "B") {
                        counterB = counterB + 1;
                        counterR = 0;
                        if (counterB === 4) {
                            break;
                        }
                    } else {
                        counterR = 0;
                        counterB = 0;
                    }
                    x = x + 1;
                }
                if (counterR === 4 || counterB === 4) {
                    break;
                }
            }
            if (counterR === 4 || counterB === 4) {
                return true;
            }
        }
        if (counterR === 4 || counterB === 4) {
            return true;
        }
    }
    return false;
};