/*jslint browser:true */
/*global connect4:false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
connect4.board = (function () {
    "use strict";
    var mainBoard = [];
    return {
        setValue: function (x, y, value) {
            mainBoard[y][x] = value;
        },
        getValue: function (x, y) {
            return mainBoard[y][x];
        },
        initBoard: function () {
            var board = [],
                i,
                j;
            for (i = 0; i < connect4.constants.Y_CORD; i = i + 1) { //for every row
                board[i] = [];
                for (j = 0; j < connect4.constants.X_CORD; j = j + 1) { //for every column
                    this.setValue(j, i, connect4.constants.DEFAULT_CHAR); //put the default value
                }
            }
            return board;
        },
        getBoardInString: function () {
            var aux = "",
                i,
                j;
            for (i = 0; i < connect4.constants.Y_CORD; i = i + 1) { //for every row
                for (j = 0; j < connect4.constants.X_CORD; j = j + 1) { //for every column
                    aux += this.getValue(j, i) + " "; //agrupate all the values of a row
                }
                aux += "\n";
            }
            return aux;
        }
    };
}());