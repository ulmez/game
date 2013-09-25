/*jslint browser:true */
/*global connect4:false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
connect4.board = (function () {
    "use strict";
    var mainBoard = [],
        getArrayIndex = function (x) {
            return x - 1;
        };
    return {
        setValue: function (x, y, value) {
            //we translate the user position to array position
            x = getArrayIndex(x);
            mainBoard[y][x] = value;
        },
        getValue: function (x, y) {
            //we translate the user position to array position
            x = getArrayIndex(x);
            return mainBoard[y][x];
        },
        initBoard: function () {
            var i,
                j;
            for (i = 0; i < connect4.config.Y_CORD; i = i + 1) { //for every row
                mainBoard[i] = [];
                for (j = 0; j < connect4.config.X_CORD; j = j + 1) { //for every column
                    mainBoard[i][j] = connect4.config.DEFAULT_CHAR;
                }
            }
        },
        getBoardInString: function () {
            var aux = "",
                i,
                j;
            for (i = 0; i < connect4.config.Y_CORD; i = i + 1) { //for every row
                for (j = 0; j < connect4.config.X_CORD; j = j + 1) { //for every column
                    aux += mainBoard[i][j] + " "; //agrupate all the values of a row
                }
                aux += "\n";
            }
            return aux;
        },
        isXinBoardLimits: function (x) {
            //we translate the user position to array position
            x = getArrayIndex(x);
            return (x >= 0) && (x < connect4.config.X_CORD);
        },
        isYinBoardLimits: function (y) {
            return (y >= 0) && (y < connect4.config.Y_CORD);
        },
        inBoardLimits: function (x, y) { //said if x, y are inside the limits of the mainBoard
            return this.isXinBoardLimits(x) && this.isYinBoardLimits(y);
        },
        isColumnPlenty: function (y) {
            return y === -1;
        }
    };
}());