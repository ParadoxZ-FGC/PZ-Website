function loadI() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("display-grid").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "art_i.txt", true);
    xhttp.send();
}
function loadP() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("display-grid").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "art_p.txt", true);
    xhttp.send();
}