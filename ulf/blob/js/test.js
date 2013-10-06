/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
/*document.onkeydown = function (event) {
    "use strict";
    var key_press = String.fromCharCode(event.keyCode),
        key_code = event.keyCode,
        status;
    document.getElementById("kp").innerHTML = key_press;
    document.getElementById("kc").innerHTML = key_code;
    status = document.getElementById("status");
    status.innerHTML = "DOWN Event Fired For : " + key_press;
};

document.onkeyup = function (event) {
    "use strict";
    var key_press = String.fromCharCode(event.keyCode),
        status;
    document.getElementById("kp").innerHTML = key_press;
    status = document.getElementById("status");
    status.innerHTML = "UP Event Fired For : " + key_press;
};*/

/*(function () {
    "use strict";

    function contentLoaded() {
        var chars = [],
            container = document.getElementById('container');
        window.addEventListener('keypress', function (e) {
            if (e.keyCode !== 13) {
                chars.push(e.key);
            }
        }, false);
        window.addEventListener('keyup', function (e) {
            if (e.keyCode === 13) {
                container.textContent = chars.join('');
                chars = [];
            }
        }, false);
    }
    window.addEventListener('DOMContentLoaded', contentLoaded, false);
}());*/

/*var myExtension_with_click = {
    init: function () {
        "use strict";
        alert("This works");
    }
};*/
var text;
var myExtension_with_keypress = {
    init: function (event) {
        "use strict";
        //alert("This works");
        //alert(event.keyCode);
        if (event.keyCode !== 13) {
            // This doesn't work
            //alert("This doesn't work");
            //console.log("KeyPress on: " + event.keyCode);
            //document.getElementById("container").innerText = "KeyPress on: " + event.keyCode;
            if (event.keyCode === 97 && event.keyCode === 115) {
                text += "KeyPress on: both";
                document.getElementById("container").innerText = text;
            }
        }
    }
};

var myExtension_with_keydown = {
    init: function (event) {
        "use strict";
        if (event.keyCode !== 13) {
            //alert("This doesn't work");
            //alert("KeyUp on: " + event.keyCode);
            console.log("KeyDown on: " + event.keyCode);
        }
    }
};

var myExtension_with_keyup = {
    init: function (event) {
        "use strict";
        if (event.keyCode !== 13) {
            //alert("This doesn't work");
            //alert("KeyUp on: " + event.keyCode);
            //console.log("KeyUp on: " + event.keyCode);
            //document.getElementById("container").innerText = "KeyUp on: " + event.keyCode;
            //text += "KeyUp on: " + event.keyCode;
            text = "";
            document.getElementById("container").innerText = text;
        }
    }
};

/*window.addEventListener("submit", function () {
    "use strict";
    myExtension_with_click.init();
}, false);*/

window.addEventListener("keypress", function (event) {
    "use strict";
    myExtension_with_keypress.init(event);
}, false);

/*window.addEventListener("keydown", function (event) {
    "use strict";
    myExtension_with_keydown.init(event);
}, false);*/

window.addEventListener("keyup", function (event) {
    "use strict";
    myExtension_with_keyup.init(event);
}, false);

//**************************************
/*(function boot() {
    "use strict";
    window.addEventListener("keypress", function (event) {
        //"use strict";
        myExtension_with_keypress.init(event);
    }, false);

    window.addEventListener("keyup", function (event) {
        //"use strict";
        myExtension_with_keyup.init(event);
    }, false);

    setTimeout(boot, 1000 / 24);
}());*/
//***************************************/