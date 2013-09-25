/*jslint browser:true */
/*global connect4:false,alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
connect4.logic = (function () {
    "use strict";
    var getPieceID = function (isPlayer1) {
        return isPlayer1 ? connect4.config.PLAYER_1_ID : connect4.config.PLAYER_2_ID;
    };

    return {
        isExit: function (val) {
            return val === connect4.config.EXIT;
        },
        isNumber: function (x) {
            return !isNaN(x);
        },
        setPiece: function (pos, isPlayer1) {
            var i = connect4.config.Y_CORD - 1, //we start to search the first free cell begining by the down and going up
                piece = getPieceID(isPlayer1); //we obtain the piece code that we save in the cell
            while (i >= 0) {
                if (connect4.board.getValue(pos, i) === connect4.config.DEFAULT_CHAR) {
                    connect4.board.setValue(pos, i, piece);
                    return i;
                }
                i = i - 1;
            }
            return -1;
        },
        isPlayerWin: function (x, y, isPlayer1) {
            var piece = getPieceID(isPlayer1);
            return connect4.logic.count.count(x, y, piece) >= connect4.config.PIECES_IN_A_ROW_TO_WIN;
        }
    };
}());