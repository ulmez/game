/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
var X_CORD = 7,
    Y_CORD = 6,
    DEFAULT_CHAR = "-",
    PLAYER_1 = "G",
    PLAYER_2 = "R",
    player_text,
    arrCordinations,
    player1 = true,
    x,
    y,
    result;

function initArray() {
    "use strict";
    arrCordinations = [];
    var i, j;
    for (i = 0; i < Y_CORD; i = i + 1) {
        arrCordinations.push([]);
        for (j = 0; j < X_CORD; j = j + 1) {
            arrCordinations[i].push(DEFAULT_CHAR);
        }
    }
}

function printArray() {
    "use strict";
    var aux, i, j;
    for (i = 0; i < arrCordinations.length; i = i + 1) {
        aux = "";
        for (j = 0; j < arrCordinations[i].length; j = j + 1) {
            aux += arrCordinations[i][j] + " ";
        }
        console.log(aux);
    }
}

function printNumericHead() {
    "use strict";
    var i,
        aux = "",
        num;
    for (i = 0; i < X_CORD; i = i + 1) {
        num = i + 1;
        aux += num + " ";
    }
    console.log(aux);
}

function printBoard() {
    "use strict";
    printNumericHead();
    printArray();
}

function setPiece(pos, player) {
    "use strict";
    var exit = false,
        i = Y_CORD - 1;
    if (pos < X_CORD) {
        while (i >= 0 && !exit) {
            if (arrCordinations[i][pos] === DEFAULT_CHAR) {
                arrCordinations[i][pos] = player;
                return i;
            }
            i = i - 1;
        }
    }
    return -1;
}

function count(x, y, player) {
    "use strict";
    var horizontal,
        vertical,
        diagonal1, //upLeft - downRight
        diagonal2, //upRight - downLeft
        countLeft = function (x, y, player) {
            if ((x < 0) || (arrCordinations[y][x] !== player)) {
                return 0;
            }
            return countLeft(x - 1, y, player) + 1;
        },
        countRight = function (x, y, player) {
            if ((x >= X_CORD) || (arrCordinations[y][x] !== player)) {
                return 0;
            }
            return countRight(x + 1, y, player) + 1;
        },
        countDown = function (x, y, player) {
            if ((y >= Y_CORD) || (arrCordinations[y][x] !== player)) {
                return 0;
            }
            return countDown(x, y + 1, player) + 1;
        },
        countUpLeft = function (x, y, player) {
            if ((x < 0) || (y < 0) || (arrCordinations[y][x] !== player)) {
                return 0;
            }
            return countUpLeft(x - 1, y - 1, player) + 1;
        },
        countDownRight = function (x, y, player) {
            if ((x >= X_CORD) || (y >= Y_CORD) || (arrCordinations[y][x] !== player)) {
                return 0;
            }
            return countDownRight(x + 1, y + 1, player) + 1;
        },
        countUpRight = function (x, y, player) {
            if ((x >= X_CORD) || (y < 0) || (arrCordinations[y][x] !== player)) {
                return 0;
            }
            return countUpRight(x + 1, y - 1, player) + 1;
        },
        countDownLeft = function (x, y, player) {
            if ((x < 0) || (y >= Y_CORD) || (arrCordinations[y][x] !== player)) {
                return 0;
            }
            return countDownLeft(x - 1, y + 1, player) + 1;
        };
    horizontal = countLeft(x - 1, y, player) + countRight(x + 1, y, player) + 1;
    vertical = countDown(x, y + 1, player) + 1;
    diagonal1 = countUpLeft(x - 1, y - 1, player) + countDownRight(x + 1, y + 1) + 1;
    diagonal2 = countUpRight(x + 1, y - 1, player) + countDownLeft(x - 1, y + 1) + 1;
    return Math.max(horizontal, vertical, diagonal1, diagonal2);
}
//Initialition of array
initArray();
while (true) {
    //print the board
    printBoard();
    //ask player where
    player_text = player1 ? "Player 1(" + PLAYER_1 + ")" : "Player 2(" + PLAYER_1 + ")";
    x = prompt(player_text + " vilket nummer. Skriv 'exit' för att sluta);
    if (!isNaN(x)) {
        x = Number(x) - 1;
        if (x >= 0 && x < X_CORD) {
            y = setPiece(x, player1 ? PLAYER_1 : PLAYER_2);
            if (y !== -1) {
                result = count(x, y, player1 ? PLAYER_1 : PLAYER_2);
                if (result >= 4) {
                    printBoard();
                    console.log("
        GRATTIS " + player_text + "
        har vunnit !! !! !! !");
                    alert("
        GRATTIS " + player_text + "
        har vunnit !! !! !! !");
                    break;
                }
                player1 = !player1;
            }
        }
    }
}