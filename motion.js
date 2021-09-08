/* NAVBAR */

function showMenu() {
    var x = document.getElementById("navbar");
    if (x.className === "myNavbar") {
        x.className += " responsive";
    } else {
        x.className = "myNavbar";
    }
}

const texts = ["Hi!", "Salut!","Hallo!", "Ciao!", "Hola!"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type(){
    if(count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 500);
};