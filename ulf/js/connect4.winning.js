/*jslint browser:true */
/*global connect4: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */

// Used to bundle all the different types of winning criteria as one
connect4.winning = function () {
    "use strict";
    var firh = connect4.winHorizontal(), // Setting win criteria horizontal
        firv = connect4.winVertical(), // Setting win criteria vertical
        firdf = connect4.winDiagonalForward(), // Setting win criteria diagonal forward
        firdb = connect4.winDiagonalBackward(); // Setting win criteria diagonal backward

    // Goes in here if either horizontal or vertical or diagonal forward or diagonal backward is true
    if (firh || firv || firdf || firdb) {
        return true; // Returns true if there is 4 in a row of a color
    }
    return false; // Returns false if there is less then 4 in a row of a color
};