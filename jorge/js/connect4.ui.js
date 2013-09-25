/*jslint browser:true */
/*global connect4:false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
connect4.ui = (function () {
    "use strict";
    /*PRIVATE FUNCTIONS*/
    //print the head of the board, numerics 1 2 3 4 5 acording the x_axis size
    var design = "background: #000; color: #FFF; font-weight:bold; font-size: 5em",
        getStringHead = function () {
            var i,
                aux = "",
                num;
            for (i = 0; i < connect4.config.X_CORD; i = i + 1) {
                num = i + 1;
                aux += num + " ";
            }
            return aux;
        },
        //print the board
        printBoard = function () {
            var head = getStringHead(),
                board = connect4.board.getBoardInString();
            console.log("%c" + head + "\n" + board, design);
        },
        //get de player description
        getPlayerDesc = function (isPlayer1) {
            return isPlayer1 ? "Player 1(" + connect4.config.PLAYER_1_ID + ")" : "Player 2(" + connect4.config.PLAYER_2_ID + ")";
        };
    /*PUBLIC FUNCTIONS*/
    return {
        showBoard: function () {
            console.clear();
            printBoard();
        },
        //ask with to a player, position where want to put a piece, or to write the exit word
        askPlayerPosition: function (isPlayer1) {
            var player_text = getPlayerDesc(isPlayer1);
            return prompt(player_text + " vilket nummer. Skriv '" + connect4.config.EXIT + "' för att sluta");
        },
        showWinner: function (isPlayer1) {
            var playerDesc = getPlayerDesc(isPlayer1);
            console.log('GRATTIS ' + playerDesc + 'har vunnit !! !! !! !');
            alert('GRATTIS ' + playerDesc + 'har vunnit !! !! !! !');
        },
        showDraw: function () {
            alert("TODO");
        }
    };
}());