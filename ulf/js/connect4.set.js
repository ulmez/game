/*jslint browser:true */
/*global connect4: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
var BOARD,
    Y_CORD = 6,
    X_CORD = 7;
connect4.set = (function () {
    "use strict";
    return {
        board: function initPlayGame() {
            var i,
                j,
                x,
                y,
                xy;
            BOARD = [];
            for (i = 0; i < Y_CORD; i = i + 1) {
                BOARD[i] = [];
                y = String(i);
                for (j = 0; j < X_CORD; j = j + 1) {
                    x = String(j);
                    xy = x + y;
                    BOARD[i][j] = [xy, "-"];
                }
            }
        },
        slot: function setSlot(x_pos, color) {
            var i;
            if (BOARD[0][x_pos][1] === "-") {
                for (i = BOARD.length - 1; i >= 0; i = i - 1) {
                    if (BOARD[i][x_pos][1] === "-") {
                        BOARD[i][x_pos][1] = color;
                        return true;
                    }
                }
            } else {
                return false;
            }
        }
    };
}());