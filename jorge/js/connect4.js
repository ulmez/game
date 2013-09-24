/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
(function () {
    "use strict";
    var X_CORD = 7, //positions in X Axis
        Y_CORD = 6, //positions in Y Axis
        DEFAULT_CHAR = "-", //character to "void" cell
        PLAYER_1 = "G", //player1 id to know that a cells is their
        PLAYER_2 = "R", //player2 id to know that a cells is their
        EXIT = "exit", //word to exit the game
        PIECES_IN_A_ROW_TO_WIN = 4, //pieces in a row that a player have to obtain to win the game
        mainBoard, //this is the mainBoard, an array
        isPlayer1 = true, //flag to indicate if it's player1 turn "true" (or player2 turn "false")
        piece, //current player id
        x, // x coordinate
        y; //y coordinate
    //set a value in a board in a x-y coordinate

    function setValue(x, y, value, board) {
        board[y][x] = value;
    }
    //get value in board in a x-y coordinate

    function getValue(x, y, board) {
        return board[y][x];
    }
    //initialize the board, return an array with the default char

    function initBoard() {
        var board = [],
            i,
            j;
        for (i = 0; i < Y_CORD; i = i + 1) { //for every row
            board[i] = [];
            for (j = 0; j < X_CORD; j = j + 1) { //for every column
                setValue(j, i, DEFAULT_CHAR, board); //put the default value
            }
        }
        return board;
    }
    //print the numeric head + board

    function showBoard(board) {
        var printHead = function () { //print the head of the board, numerics 1 2 3 4 5 acording the x_axis size
            var i,
                aux = "",
                num;
            for (i = 0; i < X_CORD; i = i + 1) {
                num = i + 1;
                aux += num + " ";
            }
            console.log(aux);
        },
            printBoard = function (board) { //print the board
                var aux, i, j;
                for (i = 0; i < board.length; i = i + 1) { //for every row
                    aux = "";
                    for (j = 0; j < board[i].length; j = j + 1) { //for every column
                        aux += getValue(j, i, board) + " "; //agrupate all the values of a row
                    }
                    console.log(aux);
                }
            };
        console.clear();
        printHead();
        printBoard(board);
    }
    //get de player description

    function getPlayerDesc(isPlayer1) {
        return isPlayer1 ? "Player 1(" + PLAYER_1 + ")" : "Player 2(" + PLAYER_2 + ")";
    }
    //ask with to a player, position where want to put a piece, or to write the exit word

    function askPlayerPosition(isPlayer1) {
        var player_text = getPlayerDesc(isPlayer1);
        return prompt(player_text + " vilket nummer. Skriv '" + EXIT + "' för att sluta");
    }

    function isNumber(x) {
        return !isNaN(x);
    }

    function getArrayPositionFromUserPosition(x) {
        return Number(x) - 1;
    }
    //check if a x_coordenate is in the board limits

    function inXBoardLimits(x) {
        return (x >= 0) && (x < X_CORD);
    }
    //check if a y_coordenate is in the board limits

    function inYBoardLimits(y) {
        return (y >= 0) && (y < Y_CORD);
    }
    //check if  x_coordenate AND y_coordenate is in the board limits

    function inBoardLimits(x, y) { //said if x, y are inside the limits of the mainBoard
        return inXBoardLimits(x) && inYBoardLimits(y);
    }
    //get the internal piece_ID of the curren player

    function getPieceID(isPlayer1) {
        return isPlayer1 ? PLAYER_1 : PLAYER_2;
    }
    //set a piece of the "player" in the board, in the column "pos", it returns y_coordinate or -1 if the board is full in that column

    function setPiece(pos, player, board) {
        var exit = false,
            i = Y_CORD - 1;
        while (i >= 0 && !exit) {
            if (getValue(pos, i, board) === DEFAULT_CHAR) {
                setValue(pos, i, player, board);
                return i;
            }
            i = i - 1;
        }
        return -1;
    }
    //say if the column where the player try to put a piece is full

    function isColumnPlenty(y) {
        return y <= -1;
    }
    //say if the player have win with his last movement

    function isPlayerWin(x, y, piece, board) {
        //count how many pieces in a row have the "player" with a piece put in x-y coordenates in a determined board
        //it checks in horizontal, vertical and the two diagonals
        var count = function (x, y, player, board) {
            var horizontal, // number of pieces of same player in horizontal
                vertical, //  number of pieces of same player in vertical
                diagonal1, // number of pieces of same player in diagonal upLeft - downRight
                diagonal2, // number of pieces of same player in diagonal upRight - downLeft
                isPlayerPiece = function (x, y, player, board) { //said if a piece in a board is from the player that plays
                    return getValue(x, y, board) === player;
                },
                //countToDirection: object used as a compilation of functions that count pieces on a row
                countToDirection = {
                    //countDirection: recursive function that count how many pieces in a row are in a determined axis movement
                    //x --> coordenate x (numeric)
                    //y --> coordenate y (numeric)
                    //player --> pieceId of a player
                    //board --> board
                    //moveX --> function to move coordenate x
                    //moveY --> function to move coordenate y
                    countDirection: function (x, y, player, board, moveX, moveY) {
                        //first we continue the movement, change the value of x-y acording functions moveX, moveY
                        x = moveX(x);
                        y = moveY(y);
                        if (!inBoardLimits(x, y) || !isPlayerPiece(x, y, player, board)) {
                            return 0;
                        }
                        return countToDirection.countDirection(x, y, player, board, moveX, moveY) + 1;
                    },
                    //axixMovements: object that have the compilation of movements of an individual axis
                    axisMovements: {
                        xLeft: function (x) { //function that calculate x_coordenate to move left
                            return x - 1;
                        },
                        xRight: function (x) { //function that calculate x_coordenate to move right
                            return x + 1;
                        },
                        notMove: function (z) { //function that calculate coordenate(x or y) to not move
                            return z;
                        },
                        yDown: function (y) { //function that calculate y_coordenate to move down
                            return y + 1;
                        },
                        yUp: function (y) { //function that calculate y_coordenate to move up
                            return y - 1;
                        }
                    },
                    //left: function that initiate the call to the recursive function to count how many pieces in a row, it configure the recursive function to count moving to the left
                    left: function (x, y, player, board) {
                        return countToDirection.countDirection(x, y, player, board, countToDirection.axisMovements.xLeft, countToDirection.axisMovements.notMove);
                    },
                    //right: function that initiate the call to the recursive function to count how many pieces in a row, it configure the recursive function to count moving to the right
                    right: function (x, y, player, board) {
                        return countToDirection.countDirection(x, y, player, board, countToDirection.axisMovements.xRight, countToDirection.axisMovements.notMove);
                    },
                    //down: function that initiate the call to the recursive function to count how many pieces in a row, it configure the recursive function to count moving to the down
                    down: function (x, y, player, board) {
                        return countToDirection.countDirection(x, y, player, board, countToDirection.axisMovements.notMove, countToDirection.axisMovements.yDown);
                    },
                    //leftUp: function that initiate the call to the recursive function to count how many pieces in a row, it configure the recursive function to count moving to the diagonal left-up
                    leftUp: function (x, y, player, board) {
                        return countToDirection.countDirection(x, y, player, board, countToDirection.axisMovements.xLeft, countToDirection.axisMovements.yUp);
                    },
                    //rightDown: function that initiate the call to the recursive function to count how many pieces in a row, it configure the recursive function to count moving to the diagonal right-Down
                    rightDown: function (x, y, player, board) {
                        return countToDirection.countDirection(x, y, player, board, countToDirection.axisMovements.xRight, countToDirection.axisMovements.yDown);
                    },
                    //rightUp: function that initiate the call to the recursive function to count how many pieces in a row, it configure the recursive function to count moving to the diagonal right-Up
                    rightUp: function (x, y, player, board) {
                        return countToDirection.countDirection(x, y, player, board, countToDirection.axisMovements.xRight, countToDirection.axisMovements.yUp);
                    },
                    //leftDown: function that initiate the call to the recursive function to count how many pieces in a row, it configure the recursive function to count moving to the diagonal Left-Down
                    leftDown: function (x, y, player, board) {
                        return countToDirection.countDirection(x, y, player, board, countToDirection.axisMovements.xLeft, countToDirection.axisMovements.yDown);
                    }
                };
            //count how many pieces of the player are in left + right + 1; the one is the current place
            horizontal = countToDirection.left(x, y, player, board) + countToDirection.right(x, y, player, board) + 1;
            //count how many pieces of the player are down + 1; the one is the current place, never is going to be a piece over the curren so is not neccesary count up
            vertical = countToDirection.down(x, y, player, board) + 1;
            //count how many pieces of the player are in leftUp + rightDown + 1; the one is the current place
            diagonal1 = countToDirection.leftUp(x, y, player, board) + countToDirection.rightDown(x, y, player, board) + 1;
            //count how many pieces of the player are in rightUp + leftDown + 1; the one is the current place
            diagonal2 = countToDirection.rightUp(x, y, player, board) + countToDirection.leftDown(x, y, player, board) + 1;
            return Math.max(horizontal, vertical, diagonal1, diagonal2);
        };
        return count(x, y, piece, board) >= PIECES_IN_A_ROW_TO_WIN;
    }
    //write the winner msg

    function showWinner(isPlayer1) {
        var playerDesc = getPlayerDesc(isPlayer1);
        console.log('GRATTIS ' + playerDesc + 'har vunnit !! !! !! !');
        alert('GRATTIS ' + playerDesc + 'har vunnit !! !! !! !');
    }
    //********************************
    //********************************
    //**   MAIN BODY OF THE APP     ** 
    //********************************
    //********************************
    //Initialition of the board
    mainBoard = initBoard();
    while (true) {
        //print the mainBoard
        showBoard(mainBoard);
        //ask player where put the piece
        x = askPlayerPosition(isPlayer1);
        if ((x === EXIT)) { //if user have write the exit word, its the end of the game
            break;
        }
        if (isNumber(x)) { //the user entry have to be a number, if its not, we ask again
            x = getArrayPositionFromUserPosition(x); //We convert position to number and substract 1 because we use 0 as first position (user uses 1)
            if (inXBoardLimits(x)) { //if the user entry is not in the board limits, we ask again
                piece = getPieceID(isPlayer1); //we obtain the app piece_id for the player, G --> gul and R --> röd
                y = setPiece(x, piece, mainBoard); //set the piece in the board and obtain the "y" position
                if (!isColumnPlenty(y)) { //if the column where the player try to put the piece is full, we ask again
                    if (isPlayerWin(x, y, piece, mainBoard)) { // have player win?
                        showBoard(mainBoard);
                        showWinner(isPlayer1);
                        break;
                    }
                    isPlayer1 = !isPlayer1; //we change player for the next round
                }
            }
        }
    }
}());