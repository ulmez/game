/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
window.addEventListener("DOMContentLoaded", function () {
    "use strict";
    var blob = document.querySelector("#blob"),
        size = 200,
        speed = 20;
    blob.style.height = size + "px";
    blob.style.width = size + "px";
    blob.style.WebkitBorderRadius = (size / 2) + "px";
    blob.style.top = "0px";
    blob.style.left = "0px";

    window.addEventListener("keydown", function (e) {
        var pos = blob.style,
            leftover;
        switch (e.keyIdentifier) {
        case "Up":
            if (parseInt(pos.top, 10) > 0) {
                if (parseInt(pos.top, 10) < speed) {
                    pos.top = parseInt(pos.top, 10) - parseInt(pos.top, 10) + "px";
                } else {
                    pos.top = parseInt(pos.top, 10) - speed + "px";
                }
            }
            break;
        case "Down":
            leftover = ((window.innerHeight - size) - parseInt(pos.top, 10) - 2);
            if (parseInt(pos.top, 10) < window.innerHeight - size) {
                if (leftover < speed) {
                    pos.top = parseInt(pos.top, 10) + leftover + "px";
                } else {
                    pos.top = parseInt(pos.top, 10) + speed + "px";
                }
            }
            break;
        case "Left":
            if (parseInt(pos.left, 10) > 0) {
                if (parseInt(pos.left, 10) < speed) {
                    pos.left = parseInt(pos.left, 10) - parseInt(pos.left, 10) + "px";
                } else {
                    pos.left = parseInt(pos.left, 10) - speed + "px";
                }
            }
            break;
        case "Right":
            leftover = ((window.innerWidth - size) - parseInt(pos.left, 10) - 2);
            if (parseInt(pos.left, 10) < window.innerWidth - size) {
                if (leftover < speed) {
                    pos.left = parseInt(pos.left, 10) + leftover + "px";
                } else {
                    pos.left = parseInt(pos.left, 10) + speed + "px";
                }
            }
            break;
        }
    });

    window.addEventListener("resize", function () {
        var pos = blob.style;
        if (parseInt(pos.top, 10) > (window.innerHeight - size) - 2) {
            pos.top = (window.innerHeight - size) - 2 + "px";
        }
        if (parseInt(pos.left, 10) > (window.innerWidth - size) - 2) {
            pos.left = (window.innerWidth - size) - 2 + "px";
        }
    });
});