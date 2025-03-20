// Global Functions


// BGM
var bgm = new Audio("./audio/sirius.mp3");
var bgm_dom = document.querySelector('audio');
bgm_dom.volume = 0.5;
var toggled = false;

function play() {
    bgm.play();
}

function toggle() {
    if (!toggled) {
        toggled = true;
        document.getElementById("bgm-icon").src = "img/pause.png";
        bgm.play();
    } else {
        toggled = false;
        document.getElementById("bgm-icon").src = "img/play.png";
        bgm.pause();
    }
}


// CSS COOKIES
window.onload = function() {
    var viewmode = getCookie("viewmode");
    if (viewmode) {
        document.getElementById("style").setAttribute("href", viewmode)
    }
}

function changeStyle(name) {
    document.getElementById("style").setAttribute("href", "css/" + name + ".css");
    bgm = new Audio("audio/" + name + ".mp3");
    setCookie("viewmode", name, 30);
}

function setCookie(name, value, days) {
    var d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + value + "; expires=" + d.toUTCString() + "; path=/"
}

function getCookie(name) {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var ck = cookies[i].trim().split("=");
        if (ck[0] == name) {
            return ck[1];
        }
    }

    return false;
}



// New tba in backgroumd
function openNewBackgroundTab(url) {
    var a = document.createElement("a");
    a.href = url;
    var evt = document.createEvent("MouseEvents");
    //the tenth parameter of initMouseEvent sets ctrl key
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0,
                                true, false, false, false, 0, null);
    a.dispatchEvent(evt);
}
