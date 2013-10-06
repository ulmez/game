/*jslint browser:true */
/*global X_CORD: false, Y_CORD: false, BOARD: false, connect4: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
connect4.game = (function () {
    "use strict";
    return {
        // Used to switch player and to see if slot is full
        playerTurn: function (p) { // Player color as parameter
            var slotLocal = ""; // Variable used to see which slot the player chooses

            // Goes in here if slot is not a number and if slot is under 1 and over 7
            while (isNaN(slotLocal) || slotLocal < 1 || slotLocal > 7) {
                if (p === "R") { // Goes in here if player is red
                    slotLocal = prompt("Pick slot 1 - 7 red player"); // Setting value 1 - 7 for red color
                } else { // Goes in here if player is blue
                    slotLocal = prompt("Pick slot 1 - 7 blue player"); // Setting value 1 - 7 for blue color
                }
            }

            // Doing this to get slot range from 0 - 6 to 1 - 7 instead, and converting the string to integer
            slotLocal = Number(slotLocal) - 1;
            if (BOARD[0][slotLocal][1] === "-") { // Check to see if slot is empty
                connect4.set.slot(slotLocal, p); // Insertion of the post in the slot
                console.clear(); // Clearing the console screen
                console.log(connect4.get.playground(1)); // Printing out the gameboard on the console screen
                return true; // Returns true if there is still an empty post in the slot
            }

            // Alert message to tell the player that the choosen slot is full
            alert("This slot is full, take another one");
            return false; // Returns false if there is not any empty posts in the slot
        },

        // Used to play the game. Knitting all together here. Like the main function in java.
        play: function play() {
            var player = "R", // Setting player red to start the game here
                playYesNo = "", // Variable used to tell if the player wants to play or not
                theEndText = "%cBye bye!", // Text used if player ends the game

                // Colorscheme to the text used if player ends the game
                design = "color: #000; font-weight:bold; font-size: 5em";

            // Goes in here if the sign the player is using is different then "y" and "n"
            while (playYesNo !== "y" && playYesNo !== "n") {
                // A prompt message, asking if the player wants to play or not
                playYesNo = prompt("Do you want to play \"Four In Row?\"\n\"Y\" for YES, \"N\" for NO");
                playYesNo = playYesNo.toLowerCase(); // Doing the entered sign to lower case
            }
            if (playYesNo === "y") { // Goes in here if the player wants to play from the beginning
                connect4.set.board(X_CORD, Y_CORD); // Initialization of the gameboard
                console.log(connect4.get.playground(1)); // Printing out the gameboard on the console

                // Goes in here if winning criteria is false and draw criteria is false
                while (!connect4.winning() && !connect4.draw()) {
                    if (player === "R") { // Goes here if player color is red

                        // Goes here after red player have placed a post in the slot
                        if (connect4.game.playerTurn(player)) {
                            if (!connect4.winning()) { // Goes here if winning criteria is false
                                player = "B"; // Setting player color to blue instead of red
                            }
                        }
                    } else if ((player === "B")) { // Goes here if player color is blue

                        // Goes here after blue player have placed a post in the slot
                        if (connect4.game.playerTurn(player)) {
                            if (!connect4.winning()) { // Goes here if winning criteria is false
                                player = "R"; // Setting player color to red instead of blue
                            }
                        }
                    }

                    // Goes here if player color is red and winning criteria is true and draw criteria is false
                    if (player === "R" && connect4.winning() && !connect4.draw()) {
                        alert("Player red wins!"); // Telling here that the red player has won
                    } else if (player === "B" && connect4.winning() && !connect4.draw()) { // Go here if blue wins
                        alert("Player blue wins!"); // Telling here that the blue player has won
                    } else if (connect4.draw()) { // Go here if it's a draw
                        alert("It's a draw!"); // Telling here that neither player won
                    }

                    // Goes here if winning criteria is true or draw criteria is true,
                    // Go here to check if the player wants to play again or not
                    // after a win or draw
                    if (connect4.winning() || connect4.draw()) {
                        playYesNo = "";

                        // Goes in here if the sign the player is using is different then "y" and "n"
                        while (playYesNo !== "y" && playYesNo !== "n") {
                            // A prompt message, asking if the player wants to play or not
                            playYesNo = prompt("Do you want to play again?\n\"Y\" for YES, \"N\" for NO");
                            playYesNo = playYesNo.toLowerCase(); // Doing the entered sign to lower case
                        }
                        if (playYesNo === "y") { // Goes in here if the player wants to play again
                            connect4.set.board(X_CORD, Y_CORD); // Initialization of the gameboard again
                            console.clear(); // Clearing the console screen
                            console.log(connect4.get.playground(1)); // Printing out the gameboard on the console
                            player = "R"; // Setting player red to start the game here again
                        } else { // Goes in here if the player doesn't want to play again
                            console.clear(); // Clearing the console screen
                            console.log(theEndText, design); // Printing out the end text to the console
                        }
                    }
                }
            } else { // Goes in here if the player doesn't want to play from the beginning
                console.log(theEndText, design); // Printing out the end text to the console
            }
        }
    };
}());