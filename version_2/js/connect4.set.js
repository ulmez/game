/*jslint browser:true */
/*global connect4: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
// Global variables
var BOARD, // Used to store the information for each square in the grid system with help of nestled arrays
    Y_CORD = 6, // Variable that stores the amount of squares to have vertically
    X_CORD = 7; // Variable that stores the amount of squares to have horizontally

connect4.set = (function () {
    "use strict";
    return {
        // initiation of the gameboard
        board: function initPlayGame() {
            // Local variables
            var i, // Used to store positions of vertical squares in the grid system
                j, // Used to store positions of horizontal squares in the grid system
                y, // Used to store the positions in vertical squares converted to string
                x, // Used to store the positions in horizontal squares converted to string
                xy; // Used to store value of x + y as string variables
            BOARD = []; // Used to declare variable BOARD as an array

            // Start of nestled for-loops used to initialize the grid of the gameboard
            for (i = 0; i < Y_CORD; i = i + 1) { // Setting the amount of posts to go through vertically
                BOARD[i] = []; // Setting here that post i in BOARD array is an array
                y = String(i); // Converting integer i to a string and store it to variable y
                for (j = 0; j < X_CORD; j = j + 1) { // Setting the amount of posts to go through horizontally
                    x = String(j); // Converting integer j to a string and store it to variable x
                    xy = x + y; // Concatenate the string variables x and y to variable xy

                    // Setting here an array with two posts. The first one is used
                    // to help see the position on the gameboard. The second is the
                    // real symbol to use on the gameboard.
                    BOARD[i][j] = [xy, "-"];
                }
            }
        },
        // Setting of slot to put player color at the post that is furthest down empty
        slot: function setSlot(x_pos, color) { // Parameters to set horizontal position and color of piece
            var i;
            if (BOARD[0][x_pos][1] === "-") { // Checking that the first post in the slot are empty

                // Going through all the posts in the slot from the bottom and up to the top
                for (i = BOARD.length - 1; i >= 0; i = i - 1) {
                    if (BOARD[i][x_pos][1] === "-") { // Checking that the post are empty
                        BOARD[i][x_pos][1] = color; // Setting here the player color of the post
                        return true; // Returning true for the function if a post in the slot was empty
                    }
                }
            } else {
                return false; // Returning false if the topmost post in the slot are not empty
            }
        }
    };
}());