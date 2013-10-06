/*jslint browser:true */
/*global BOARD: false, connect4: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
connect4.get = (function () {
    "use strict";
    return {

        // Printing of the gameboard to the screen with parameter to show either position or color sign
        playground: function playground(printPos) {
            var i,
                j,
                printOut = "", // String variable to store the whole gameboard with %c for every post
                design = [], // Array variable to store gameboard string with color code for every %c

                // Colorscheme on the gameboard for console.log.apply
                colorR = "background: #000; color: #FF1F05; font-weight:bold; font-size: 5em", // Red player
                colorB = "background: #000; color: #2D28FF; font-weight:bold; font-size: 5em", // Blue player
                colorE = "background: #000; color: #636363; font-weight:bold; font-size: 5em", // Empty post

                // Color for numbers on the gameboard
                colorG = "background: #000; color: #C7C7C7; font-weight:bold; font-size: 5em";

            // Setting of the first top line of the gameboard, numbering every slot
            // in x-row from 1 to 7, and putting %c first to get colorscheme
            printOut += "%c   1 2 3 4 5 6 7 \n";
            design.push(colorG); // Pushing colorscheme for the numbering in x-row into array design
            for (i = 0; i < BOARD.length; i = i + 1) { // Looping through the y-row length of the board
                printOut += " %c"; // Setting %c to get colorscheme to the numbering of the y-row values
                printOut += i + 1 + " "; // Setting here the numbering of every slot in y-row from 1 to 6
                design.push(colorG); // Pushing colorscheme for the numbering in y-row into array design
                for (j = 0; j < BOARD[0].length; j = j + 1) { // Looping through the x-row length of the board

                    // Getting the value for the post in the gameboard
                    printOut += "%c" + BOARD[i][j][printPos] + " ";
                    if (BOARD[i][j][printPos] === "R") { // Check if post color is red
                        design.push(colorR); // Pushing colorscheme for the red player
                    } else if (BOARD[i][j][printPos] === "B") { // Check if post color is blue
                        design.push(colorB); // Pushing colorscheme for the blue player
                    } else { // Check if post color is empty
                        design.push(colorE); // Pushing colorscheme for the empty post
                    }
                }
                printOut += "\n"; // Setting newline per 7 posts
            }
            design.unshift(printOut); // Putting the string "printOut" first in the array "design"

            // Returning the array "design" with string "printOut" on the first post and with a colorscheme
            // for every "%c" in the string "printOut" on ever other posts in the array "design"
            return console.log.apply(console, design);
        },

        // Getting the global array BOARD
        board: function getBoard() {
            return BOARD;
        }
    };
}());