/*jslint browser:true */
/*global connect4: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
var BOARD,
    Y_CORD = 6,
    X_CORD = 7,
    DESIGN = "background: #000; color: #FFF; font-weight:bold; font-size: 5em";
connect4.set = (function () {
    "use strict";
    //var BOARD;
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
            //For draw check----------------------------------
            /*connect4.set.slot(0, "R");
            connect4.set.slot(0, "R");
            connect4.set.slot(0, "R");
            connect4.set.slot(6, "B");
            connect4.set.slot(6, "R");
            connect4.set.slot(6, "B");
            connect4.set.slot(1, "R");
            connect4.set.slot(1, "R");
            connect4.set.slot(1, "R");
            connect4.set.slot(5, "B");
            connect4.set.slot(5, "B");
            connect4.set.slot(5, "R");
            connect4.set.slot(2, "B");
            connect4.set.slot(2, "B");
            connect4.set.slot(2, "B");
            connect4.set.slot(4, "R");
            connect4.set.slot(4, "B");
            connect4.set.slot(4, "R");
            connect4.set.slot(3, "R");
            connect4.set.slot(3, "R");
            connect4.set.slot(3, "R");
            connect4.set.slot(0, "B");
            connect4.set.slot(0, "B");
            connect4.set.slot(1, "B");
            connect4.set.slot(1, "B");
            connect4.set.slot(2, "R");
            connect4.set.slot(2, "R");
            connect4.set.slot(6, "R");
            connect4.set.slot(6, "R");
            connect4.set.slot(5, "B");
            connect4.set.slot(5, "R");
            connect4.set.slot(3, "B");
            connect4.set.slot(3, "B");
            connect4.set.slot(4, "B");
            connect4.set.slot(4, "B");
            connect4.set.slot(0, "R");
            connect4.set.slot(1, "R");
            connect4.set.slot(2, "B");
            connect4.set.slot(3, "R");
            connect4.set.slot(4, "B");
            connect4.set.slot(6, "B");*/
        },
        slot: function setSlot(x_pos, color) {
            var i;
            if (BOARD[0][x_pos][1] === "-") {
                for (i = BOARD.length - 1; i >= 0; i = i - 1) {
                    if (BOARD[i][x_pos][1] === "-") {
                        BOARD[i][x_pos][1] = color;
                        //break;
                        return true;
                    }
                }
            } else {
                return false;
            }
        }
    };
}());