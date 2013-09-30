/*jslint browser:true */
/*global BOARD: false, connect4: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */

// Check to see if there are four in a row of a color diagonal backward
connect4.winDiagonalBackward = function fourInRowDiagonalBackwardCheck() {
    "use strict";
    var i,
        j,
        x,
        k,
        counterR, // Variable to count number of red posts in a row
        counterB; // Variable to count number of blue posts in a row
    for (i = 0; i < BOARD.length; i = i + 1) { // Looping through y-row length of the gameboard
        for (j = 0; j < BOARD[i].length; j = j + 1) { // Looping through x-row length of the gameboard

            // Setting counterR to 0 if counterR are under 4 after looking through oneline in x-row
            // on every red post with diagonal backward
            counterR = 0;

            // Setting counterB to 0 if counterB are under 4 after looking through oneline in x-row
            // on every blue post with diagonal forward
            counterB = 0;

            // Goes in if post is different then empty and if i + 3 is less then gameboard limits
            // in y-row and if j - 3 is equal to zero or greater then gameboard limits in x-row
            // With simpler words: goes only in here if we are within gameboard limits when we are
            // doing the diagonal backward 4 in a row check
            if (BOARD[i][j][1] !== "-" && i + 3 < BOARD.length && j - 3 >= 0) {
                // Setting x to i to get the position from where to make the diagonal backward check in y-row
                x = i;

                // Doing the diagonal backward loop here from the x-row post within gameboard limits,
                // Setting k to j to get the x-row position to start the diagonal backward check from
                for (k = j; k > j - 4; k = k - 1) {
                    if (BOARD[x][k][1] === "R") { // Going in here if post are red color
                        counterR = counterR + 1; // Adding 1 to counterR
                        counterB = 0; // Setting counterB to 0 because counterR is breaking the 4 in a row streak

                        // Goes in here and breaks the loop if there is 4 posts in a row of red color
                        if (counterR === 4) {
                            break;
                        }
                    } else if (BOARD[x][k][1] === "B") { // Going in here if post are blue color
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
                    x = x + 1; // Adding 1 to x to get the next y-row post position
                }

                // Checking here to see if counterR or counterB is 4 in a row of it's color,
                // if either of them is 4 it will break the loop because further checking is unnecessary,
                // there is a win in that case
                if (counterR === 4 || counterB === 4) {
                    break;
                }
            }

            // Checking here to see if counterR or counterB is 4 in a row of it's color,
            // if either of them is 4 it will return true and break the loop because
            // further checking is unnecessary, there is a win in that case
            if (counterR === 4 || counterB === 4) {
                return true; // Returns true if there is 4 in a row diagonal backward either of red or blue color
            }
        }

        // Checking here to see if counterR or counterB is 4 in a row of it's color,
        // if either of them is 4 it will return true and break the loop because
        // further checking is unnecessary, there is a win in that case
        if (counterR === 4 || counterB === 4) {
            return true; // Returns true if there is 4 in a row diagonal backward either of red or blue color
        }
    }
    return false; // Returns false if counterR or counterB is lower then 4
};