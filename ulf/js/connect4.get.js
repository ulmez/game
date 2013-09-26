/*jslint browser:true */
/*global BOARD: false, connect4: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
connect4.get = (function () {
    "use strict";
    return {
        playground: function playground(printPos) {
            var i,
                j,
                printOut = "",
                design = [],
                colorR = "background: #000; color: #FF1F05; font-weight:bold; font-size: 5em",
                colorB = "background: #000; color: #2D28FF; font-weight:bold; font-size: 5em",
                colorE = "background: #000; color: #636363; font-weight:bold; font-size: 5em",
                colorG = "background: #000; color: #C7C7C7; font-weight:bold; font-size: 5em";
            printOut += "%c   1 2 3 4 5 6 7 \n";
            design.push(colorG);
            for (i = 0; i < BOARD.length; i = i + 1) {
                printOut += " %c";
                printOut += i + 1 + " ";
                design.push(colorG);
                for (j = 0; j < BOARD[0].length; j = j + 1) {
                    printOut += "%c" + BOARD[i][j][printPos] + " ";
                    if (BOARD[i][j][printPos] === "R") {
                        design.push(colorR);
                    } else if (BOARD[i][j][printPos] === "B") {
                        design.push(colorB);
                    } else {
                        design.push(colorE);
                    }
                }
                printOut += "\n";
            }
            design.unshift(printOut);
            return console.log.apply(console, design);
        },
        board: function getBoard() {
            return BOARD;
        }
    };
}());