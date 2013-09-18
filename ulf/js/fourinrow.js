/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
var X_CORD = 7,
    Y_CORD = 6,
    board,
    i,
    j,
    x,
    y,
    xy,
    printOut = "";

function slotChoice(x_pos, color) {
    "use strict";
    for (i = board.length - 1; i >= 0; i = i - 1) {
        if (board[i][x_pos][1] === "-") {
            board[i][x_pos][1] = color;
            break;
        }
    }
}

function initPlayGame(x_val, y_val) {
    "use strict";
    board = [];
    for (i = 0; i < y_val; i = i + 1) {
        board[i] = [];
        y = String(i);
        //alert(y);
        for (j = 0; j < x_val; j = j + 1) {
            //alert(y);
            x = String(j);
            xy = x + y;
            //alert(xy);
            board[i][j] = [xy, "-"];
            ////printOut += board[i][j][0] + " ";
        }
        ////printOut += "\n";
        //console.log(board[i]);
        //board[i] = slot;
    }
    //printOut = board.join("\n");
    ////return printOut;
    //return board[0][0][0];
}
var playground = function (printPos) {
    "use strict";
    printOut = "";
    printOut += "  1 2 3 4 5 6 7\n";
    for (i = 0; i < board.length; i = i + 1) {
        printOut += i + 1 + " ";
        for (j = 0; j < board[i].length; j = j + 1) {
            printOut += board[i][j][printPos] + " ";
        }
        printOut += "\n";
    }
    return printOut;
};
initPlayGame(7, 6);
slotChoice(3, "R");
console.log(playground(1));
//console.log(board.length);
//board[1][2] = "x";
//console.log(board.join("\n"));
//console.log(board);
//console.log(board[0]);