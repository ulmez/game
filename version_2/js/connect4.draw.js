/*jslint browser:true */
/*global X_CORD: false, BOARD: false, connect4: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */

// Check to see if there is a draw. That neither red or blue have 4 in a row when the whole gameboard are filled
connect4.draw = function drawCheck() {
    "use strict";
    var winningCheck = connect4.winning(),
        counter = 0, // Used to see how many not empty posts there are in the top x-row
        i;
    for (i = 0; i < X_CORD; i = i + 1) { // Going through all the posts in the top x-row
        if (BOARD[0][i][1] !== "-") { // Goes in if post are different then empty
            counter = counter + 1; // Adding 1 to counter if post are not empty
        }
    }

    // Goes in here if all the posts in the top x-row are full, and
    // there are not 4 in a row of either red or blue color
    if (counter === 7 && !winningCheck) {
        return true; // Is true if there is a draw
    }
    return false; // Is false if there is not a draw
};