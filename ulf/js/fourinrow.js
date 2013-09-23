/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
var X_CORD = 7,
    Y_CORD = 6,
    board,
    boardVertical,
    boardOneLine,
    i,
    j,
    k,
    x,
    y,
    xy,
    counter,
    counterR,
    counterB,
    slotR,
    slotB,
    checker,
    design = "background: #000; color: #FFF; font-weight:bold; font-size: 5em",
    printOut = "";

function slotChoice(x_pos, color) {
    "use strict";
    if (board[0][x_pos][1] === "-") {
        for (i = board.length - 1; i >= 0; i = i - 1) {
            if (board[i][x_pos][1] === "-") {
                board[i][x_pos][1] = color;
                //break;
                return true;
            }
        }
    } else {
        return false;
    }
}
var firh = function fourInRowHorizontalCheck() {
    "use strict";
    for (i = 0; i < board.length; i = i + 1) {
        counterR = 0;
        counterB = 0;
        for (j = 0; j < board[i].length; j = j + 1) {
            if (board[i][j][1] === "R") {
                counterR = counterR + 1;
                counterB = 0;
                if (counterR === 4) {
                    break;
                }
            } else if (board[i][j][1] === "B") {
                counterB = counterB + 1;
                counterR = 0;
                if (counterB === 4) {
                    break;
                }
            } else {
                counterR = 0;
                counterB = 0;
            }
        }
        if (counterR === 4 || counterB === 4) {
            return true;
            //break;
        }
    }
    //return counterR + " " + counterB;
    return false;
};
var firv = function fourInRowVerticalCheck() {
    "use strict";
    //boardVertical = [];
    //x = 0;
    for (i = 0; i < board.length + 1; i = i + 1) {
        counterR = 0;
        counterB = 0;
        for (j = 0; j <= board.length - 1; j = j + 1) {
            //console.log(board[j][i][0]);
            if (board[j][i][1] === "R") {
                counterR = counterR + 1;
                counterB = 0;
                //console.log(counterR);
                if (counterR === 4) {
                    break;
                }
            } else if (board[j][i][1] === "B") {
                counterB = counterB + 1;
                counterR = 0;
                if (counterB === 4) {
                    break;
                }
            } else {
                counterR = 0;
                counterB = 0;
            }
        }
        if (counterR === 4 || counterB === 4) {
            return true;
            //break;
        }
    }
    //console.log("----------------");
    return false;
};
var firdf = function fourInRowDiagonalForwardCheck() {
    "use strict";
    //printOut = "";
    for (i = 0; i < board.length; i = i + 1) {
        for (j = 0; j < board[i].length; j = j + 1) {
            counterR = 0;
            counterB = 0;
            //printOut += board[i][j][1] + " ";
            if (board[i][j][1] !== "-" && i + 3 < board.length && j + 3 < board[i].length) {
                //console.log(board[i][j][0]);
                x = i;
                for (k = j; k < j + 4; k = k + 1) {
                    if (board[x][k][1] === "R") {
                        //alert("hej");
                        counterR = counterR + 1;
                        counterB = 0;
                        if (counterR === 4) {
                            break;
                        }
                    } else if (board[x][k][1] === "B") {
                        counterB = counterB + 1;
                        counterR = 0;
                        if (counterB === 4) {
                            break;
                        }
                    } else {
                        counterR = 0;
                        counterB = 0;
                    }
                    //printOut += board[x][k][1] + " ";
                    //printOut += k + " " + x + " " + counterR + "    ";
                    x = x + 1;
                    /*if (counterR === 4) {
                        //alert("hej");
                        break;
                    }*/
                }
                if (counterR === 4 || counterB === 4) {
                    break;
                }
            }
            //printOut += "\n";
            if (counterR === 4 || counterB === 4) {
                //alert("hej");
                return true;
            }
        }
        if (counterR === 4 || counterB === 4) {
            return true;
            //break;
        }
    }
    //return printOut;
    return false;
};
var firdb = function fourInRowDiagonalBackwardCheck() {
    "use strict";
    //printOut = "";
    for (i = 0; i < board.length; i = i + 1) {
        for (j = 0; j < board[i].length; j = j + 1) {
            counterR = 0;
            counterB = 0;
            //printOut += board[i][j][1] + " ";
            if (board[i][j][1] !== "-" && i + 3 < board.length && j - 3 >= 0) {
                //console.log(board[i][j][0]);
                x = i;
                for (k = j; k > j - 4; k = k - 1) {
                    if (board[x][k][1] === "R") {
                        //alert("hej");
                        counterR = counterR + 1;
                        counterB = 0;
                        //alert(counterR);
                        if (counterR === 4) {
                            break;
                        }
                    } else if (board[x][k][1] === "B") {
                        counterB = counterB + 1;
                        counterR = 0;
                        if (counterB === 4) {
                            break;
                        }
                    } else {
                        counterR = 0;
                        counterB = 0;
                    }
                    //alert("hej");
                    //printOut += board[x][k][0] + " ";
                    //printOut += k + " " + x + " " + counterR + "    ";
                    x = x + 1;
                    /*if (counterR === 4) {
                        //alert("hej");
                        break;
                    }*/
                }
                if (counterR === 4 || counterB === 4) {
                    break;
                }
            }
            //printOut += "\n";
            if (counterR === 4 || counterB === 4) {
                //alert("hej");
                return true;
            }
        }
        if (counterR === 4 || counterB === 4) {
            return true;
            //break;
        }
    }
    //return printOut;
    return false;
    //return printOut;
};

function winningCheck() {
    "use strict";
    if (firh() || firv() || firdf() || firdb()) {
        return true;
    }
    return false;
}
var draw = function drawCheck() {
    "use strict";
    counter = 0;
    for (i = 0; i < X_CORD; i = i + 1) {
        if (board[0][i][1] !== "-") {
            counter = counter + 1;
        }
    }
    //console.log(counter);
    if (counter === 7 && !winningCheck()) {
        return true;
    }
    return false;
};

function boardToOneLine(arrPlayground) {
    "use strict";
    //printOut = "";
    counter = 0;
    boardOneLine = [];
    for (i = 0; i < arrPlayground.length; i = i + 1) {
        counterR = 0;
        counterB = 0;
        for (j = 0; j < arrPlayground[i].length; j = j + 1) {
            //printOut += board[i][j][0] + " ";
            //boardOneLine[i][j] = [board[i][j][0], board[i][j][1]];
            //boardOneLine = [board[i][j][0], board[i][j][1]];
            boardOneLine[counter] = [arrPlayground[i][j][0], arrPlayground[i][j][1]];
            counter = counter + 1;
            //console.log(boardOneLine);
        }
        //printOut += "\n";
    }
    //console.log(printOut);
    //console.log(boardOneLine);
    //return boardOneLine;
}
//-----------------------------------------------------------------
/*var firv = function fourInRowVerticalCheck() {
    "use strict";
    boardToOneLine(board);
    return boardOneLine;
};*/

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
    printOut += "%c   1 2 3 4 5 6 7 \n";
    for (i = 0; i < board.length; i = i + 1) {
        printOut += " ";
        printOut += i + 1 + " ";
        for (j = 0; j < board[0].length; j = j + 1) {
            printOut += board[i][j][printPos] + " ";
        }
        printOut += "\n";
    }
    return printOut;
};
var player = "R",
    slot,
    playYesNo = "";
var playerTurn = function (p) {
    "use strict";
    slot = "";
    while (isNaN(slot) || slot < 1 || slot > 7) {
        if (p === "R") {
            slot = prompt("Pick slot 1 - 7 red player");
        } else {
            slot = prompt("Pick slot 1 - 7 blue player");
        }
    }
    slot = Number(slot) - 1;
    if (board[0][slot][1] === "-") {
        slotChoice(slot, p);
        console.clear();
        console.log(playground(1), design);
        return true;
    }
    alert("This slot is full, take another one");
    //if (winningCheck()) {
    //    return p;
    //}
    return false;
};
while (playYesNo !== "y" && playYesNo !== "n") {
    playYesNo = prompt("Do you want to play \"Four In Row?\"\n\"Y\" for YES, \"N\" for NO");
    playYesNo = playYesNo.toLowerCase();
}
if (playYesNo === "y") {
    initPlayGame(X_CORD, Y_CORD);
    //Used for draw check-------------------
    /*slotChoice(0, "R");
    slotChoice(0, "R");
    slotChoice(0, "R");
    slotChoice(6, "B");
    slotChoice(6, "R");
    slotChoice(6, "B");
    slotChoice(1, "R");
    slotChoice(1, "R");
    slotChoice(1, "R");
    slotChoice(5, "B");
    slotChoice(5, "B");
    slotChoice(5, "R");
    slotChoice(2, "B");
    slotChoice(2, "B");
    slotChoice(2, "B");
    slotChoice(4, "R");
    slotChoice(4, "B");
    slotChoice(4, "R");
    slotChoice(3, "R");
    slotChoice(3, "R");
    slotChoice(3, "R");
    slotChoice(0, "B");
    slotChoice(0, "B");
    slotChoice(1, "B");
    slotChoice(1, "B");
    slotChoice(2, "R");
    slotChoice(2, "R");
    slotChoice(6, "R");
    slotChoice(6, "R");
    slotChoice(5, "B");
    slotChoice(5, "R");
    slotChoice(3, "B");
    slotChoice(3, "B");
    slotChoice(4, "B");
    slotChoice(4, "B");
    slotChoice(0, "R");
    slotChoice(1, "R");
    slotChoice(2, "B");
    slotChoice(3, "R");
    slotChoice(4, "R");
    slotChoice(6, "R");*/
    //--------------------------------------
    console.log(playground(1), design);
    while (!winningCheck() && !draw()) {
        if (player === "R") {
            if (playerTurn(player)) {
                if (!winningCheck()) {
                    player = "B";
                }
            }
        } else if ((player === "B")) {
            if (playerTurn(player)) {
                if (!winningCheck()) {
                    player = "R";
                }
            }
        }
        if (player === "R" && winningCheck() && !draw()) {
            alert("Player red wins!");
        } else if (player === "B" && winningCheck() && !draw()) {
            alert("Player blue wins!");
        } else if (draw()) {
            alert("It's a draw!");
        }
        if (winningCheck() || draw()) {
            //playYesNo = prompt("Do you want to play again?\n\"Y\" for YES, \"N\" for NO");
            //if (playYesNo === "y") {
            playYesNo = "";
            while (playYesNo !== "y" && playYesNo !== "n") {
                playYesNo = prompt("Do you want to play again?\n\"Y\" for YES, \"N\" for NO");
                playYesNo = playYesNo.toLowerCase();
            }
            if (playYesNo === "y") {
                initPlayGame(X_CORD, Y_CORD);
                console.clear();
                console.log(playground(1), design);
                player = "R";
            } else {
                console.clear();
                console.log("%cBye bye!", "color: #000; font-weight:bold; font-size: 5em");
            }
        }
    }
} else {
    console.log("%cBye bye!", "color: #000; font-weight:bold; font-size: 5em");
}
////console.log(firh());
////console.log(firv());
////console.log(firdf());
////console.log(firdb());
//slotChoice(3, "R");
//slotChoice(3, "R");
//slotChoice(3, "R");
//slotChoice(3, "R");
//slotChoice(3, "R");
//slotChoice(3, "R");
//slotChoice(3, "R");
/*slotChoice(4, "R");
slotChoice(5, "R");
slotChoice(6, "R");
slotChoice(3, "R");
slotChoice(4, "R");
slotChoice(5, "R");
slotChoice(6, "R");
slotChoice(3, "R");
slotChoice(4, "R");
slotChoice(5, "R");
slotChoice(6, "R");
slotChoice(3, "R");
slotChoice(4, "R");
slotChoice(5, "R");
slotChoice(6, "R");*/
////orderBoardToVerticalCheck();
//console.log(board.length);
//console.log(board[6].length);
//board[1][2] = "x";
//console.log(board.join("\n"));
//console.log(board);
//console.log(board[0]);