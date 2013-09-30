/*jslint browser:true */
/*global BOARD: false, connect4: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */

// Check to see if there are four in a row of a color horizontally
connect4.winHorizontal = function horizontal() {
    "use strict";
    var i,
        j,
        counterR, // Variable to count number of red posts in a row
        counterB; // Variable to count number of blue posts in a row
    for (i = 0; i < BOARD.length; i = i + 1) { // Looping through y-row length of the gameboard
        counterR = 0; // Setting counterR to 0 if counterR are under 4 after looking through oneline in x-row
        counterB = 0; // Setting counterB to 0 if counterB are under 4 after looking through oneline in x-row
        for (j = 0; j < BOARD[i].length; j = j + 1) { // Looping through x-row length of the gameboard
            if (BOARD[i][j][1] === "R") { // Going in here if post are red color
                counterR = counterR + 1; // Adding 1 to counterR
                counterB = 0; // Setting counterB to 0 because counterR is breaking the 4 in a row streak

                // Goes in here and breaks the loop if there is 4 posts in a row of red color
                if (counterR === 4) {
                    break;
                }
            } else if (BOARD[i][j][1] === "B") { // Going in here if post are blue color
                counterB = counterB + 1; // Adding 1 to counterB
                counterR = 0; // Setting counterR to 0 because counterB is breaking the 4 in a row streak

                // Goes in here and breaks the loop if there is 4 posts in a row of blue color
                if (counterB === 4) {
                    break;
                }
            } else { // Goes in here if post are empty
                // Setting both to zero here because neither of the colors have it's color in the post
                counterR = 0;
                counterB = 0;
            }
        }

        // Checking here to see if counterR or counterB is 4 in a row of it's color,
        // if either of them is 4 it will break the loop because further checking is unnecessary,
        // there is a win in that case
        if (counterR === 4 || counterB === 4) {
            return true; // Returns true if there is 4 in a row horizontally either for red or blue player
        }
    }
    return false; // Returns false if counterR or counterB is lower then 4
};