/*jslint browser:true */
/*global X_CORD: false, BOARD: false, connect4: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
connect4.draw = function drawCheck() {
    "use strict";
    var winningCheck = connect4.winning(),
        counter = 0,
        i;
    for (i = 0; i < X_CORD; i = i + 1) {
        if (BOARD[0][i][1] !== "-") {
            counter = counter + 1;
        }
    }
    if (counter === 7 && !winningCheck) {
        return true;
    }
    return false;
};