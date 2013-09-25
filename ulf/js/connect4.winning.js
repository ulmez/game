/*jslint browser:true */
/*global connect4: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
connect4.winning = function () {
    "use strict";
    var firh = connect4.winHorizontal(),
        firv = connect4.winVertical(),
        firdf = connect4.winDiagonalForward(),
        firdb = connect4.winDiagonalBackward();

    if (firh || firv || firdf || firdb) {
        return true;
    }
    return false;
};