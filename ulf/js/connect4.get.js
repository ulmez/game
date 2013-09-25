/*jslint browser:true */
/*global BOARD: false, connect4: false, DESIGN: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
connect4.get = (function () {
    "use strict";
    //var design = "background: #000; color: #FFF; font-weight:bold; font-size: 5em";
    //BOARD;
    return {
        playground: function playground(printPos) {
            var i,
                j,
                printOut = "";
            printOut += "%c   1 2 3 4 5 6 7 \n";
            for (i = 0; i < BOARD.length; i = i + 1) {
                printOut += " ";
                printOut += i + 1 + " ";
                for (j = 0; j < BOARD[0].length; j = j + 1) {
                    printOut += BOARD[i][j][printPos] + " ";
                }
                printOut += "\n";
            }
            return console.log(printOut, DESIGN);
        },
        board: function getBoard() {
            return BOARD;
        }
    };
}());