/*jslint browser:true */
/*global connect4:false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
connect4.play = function () {
    "use strict";
    var isPlayer1 = true, //flag to indicate if it's player1 turn "true" (or player2 turn "false")
        x, // x coordinate
        y; // y coordinate

    connect4.board.initBoard();
    while (true) {
        //print the mainBoard
        connect4.ui.showBoard();

        //ask player where put the piece
        x = connect4.ui.askPlayerPosition(isPlayer1);

        //if user have write the exit word, its the end of the game
        if ((connect4.logic.isExit(x))) {
            break;
        }
        //the user entry is a number and is in limits
        if (connect4.logic.isNumber(x) && connect4.board.isXinBoardLimits(x)) {
            //piece = getPieceID(isPlayer1); //we obtain the app piece_id for the player, G --> gul and R --> röd
            y = connect4.logic.setPiece(x, isPlayer1); //set the piece in the board and obtain the "y" position
            if (!connect4.board.isColumnPlenty(y)) { //if the column where the player try to put the piece is full, we ask again
                if (connect4.logic.isPlayerWin(x, y, isPlayer1)) { // have player win?
                    connect4.ui.showBoard();
                    connect4.ui.showWinner(isPlayer1);
                    break;
                }
                isPlayer1 = !isPlayer1; //we change player for the next round
            }
        }
    }
};