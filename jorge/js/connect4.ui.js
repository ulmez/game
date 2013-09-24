/*jslint browser:true */
/*global connect4:false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
connect4.ui = (function () {
    "use strict";
    //print the head of the board, numerics 1 2 3 4 5 acording the x_axis size
    var printHead = function () {
        var i,
            aux = "",
            num;
        for (i = 0; i < connect4.constants.X_CORD; i = i + 1) {
            num = i + 1;
            aux += num + " ";
        }
        console.log(aux);
    },
        //print the board
        printBoard = function (board) {
            var aux, i, j;
            for (i = 0; i < board.length; i = i + 1) { //for every row
                aux = "";
                for (j = 0; j < board[i].length; j = j + 1) { //for every column
                    aux += connect4.board.getValue(j, i, board) + " "; //agrupate all the values of a row
                }
                console.log(aux);
            }
        },
        //get de player description
        getPlayerDesc = function (isPlayer1) {
            return isPlayer1 ? "Player 1(" + connect4.constants.PLAYER_1 + ")" : "Player 2(" + connect4.constants.PLAYER_2 + ")";
        };
    return {
        showBoard: function () {
            console.clear();
            printHead();
            printBoard();
        },
        //ask with to a player, position where want to put a piece, or to write the exit word
        askPlayerPosition: function (isPlayer1) {
            var player_text = getPlayerDesc(isPlayer1);
            return prompt(player_text + " vilket nummer. Skriv '" + connect4.constants.EXIT + "' för att sluta");
        }
    };
}());