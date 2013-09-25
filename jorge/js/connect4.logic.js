/*jslint browser:true */
/*global connect4:false,alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
connect4.logic = function () {
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
            var i = connect4.config.Y_CORD - 1,
                piece = getPieceID(isPlayer1);
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
            //count how many pieces in a row have the "player" with a piece put in x-y coordenates i
            //it checks in horizontal, vertical and the two diagonals
            var count = function (x, y, player) {
                var horizontal, // number of pieces of same player in horizontal
                    vertical, //  number of pieces of same player in vertical
                    diagonal1, // number of pieces of same player in diagonal upLeft - downRight
                    diagonal2, // number of pieces of same player in diagonal upRight - downLeft
                    isPlayerPiece = function (x, y, player) { //said if a piece in a board is from the player that plays
                        return getValue(x, y) === player;
                    },
                    //countToDirection: object used as a compilation of functions that count pieces on a row
                    countToDirection = {
                        //countDirection: recursive function that count how many pieces in a row are in a determined axis movement
                        //x --> coordenate x (numeric)
                        //y --> coordenate y (numeric)
                        //player --> pieceId of a player
                        //moveX --> function to move coordenate x
                        //moveY --> function to move coordenate y
                        countDirection: function (x, y, player, moveX, moveY) {
                            //first we continue the movement, change the value of x-y acording functions moveX, moveY
                            x = moveX(x);
                            y = moveY(y);
                            if (!inBoardLimits(x, y) || !isPlayerPiece(x, y, player)) {
                                return 0;
                            }
                            return countToDirection.countDirection(x, y, player, moveX, moveY) + 1;
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
                        left: function (x, y, player) {
                            return countToDirection.countDirection(x, y, player, countToDirection.axisMovements.xLeft, countToDirection.axisMovements.notMove);
                        },
                        //right: function that initiate the call to the recursive function to count how many pieces in a row, it configure the recursive function to count moving to the right
                        right: function (x, y, player) {
                            return countToDirection.countDirection(x, y, player, countToDirection.axisMovements.xRight, countToDirection.axisMovements.notMove);
                        },
                        //down: function that initiate the call to the recursive function to count how many pieces in a row, it configure the recursive function to count moving to the down
                        down: function (x, y, player) {
                            return countToDirection.countDirection(x, y, player, countToDirection.axisMovements.notMove, countToDirection.axisMovements.yDown);
                        },
                        //leftUp: function that initiate the call to the recursive function to count how many pieces in a row, it configure the recursive function to count moving to the diagonal left-up
                        leftUp: function (x, y, player) {
                            return countToDirection.countDirection(x, y, player, countToDirection.axisMovements.xLeft, countToDirection.axisMovements.yUp);
                        },
                        //rightDown: function that initiate the call to the recursive function to count how many pieces in a row, it configure the recursive function to count moving to the diagonal right-Down
                        rightDown: function (x, y, player) {
                            return countToDirection.countDirection(x, y, player, countToDirection.axisMovements.xRight, countToDirection.axisMovements.yDown);
                        },
                        //rightUp: function that initiate the call to the recursive function to count how many pieces in a row, it configure the recursive function to count moving to the diagonal right-Up
                        rightUp: function (x, y, player) {
                            return countToDirection.countDirection(x, y, player, countToDirection.axisMovements.xRight, countToDirection.axisMovements.yUp);
                        },
                        //leftDown: function that initiate the call to the recursive function to count how many pieces in a row, it configure the recursive function to count moving to the diagonal Left-Down
                        leftDown: function (x, y, player) {
                            return countToDirection.countDirection(x, y, player, countToDirection.axisMovements.xLeft, countToDirection.axisMovements.yDown);
                        }
                    };
                //count how many pieces of the player are in left + right + 1; the one is the current place
                horizontal = countToDirection.left(x, y, player) + countToDirection.right(x, y, player) + 1;
                //count how many pieces of the player are down + 1; the one is the current place, never is going to be a piece over the curren so is not neccesary count up
                vertical = countToDirection.down(x, y, player) + 1;
                //count how many pieces of the player are in leftUp + rightDown + 1; the one is the current place
                diagonal1 = countToDirection.leftUp(x, y, player) + countToDirection.rightDown(x, y, player) + 1;
                //count how many pieces of the player are in rightUp + leftDown + 1; the one is the current place
                diagonal2 = countToDirection.rightUp(x, y, player) + countToDirection.leftDown(x, y, player) + 1;
                return Math.max(horizontal, vertical, diagonal1, diagonal2);
            };
            return count(x, y, piece) >= connect4.config.PIECES_IN_A_ROW_TO_WIN;
        }
    };
};