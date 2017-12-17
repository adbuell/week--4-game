window.onload = function () {
var wins = 0;
var loses = 0;
var randomNumber = Math.floor(Math.random() * 101) + 19;
var yourNumber = 0;

document.getElementById("randomnumber").innerHTML = randomNumber;

document.getElementById("yournumber").innerHTML = yourNumber;

function myFunction() {
    var blue = Math.floor((Math.random() * 12) + 1);
    document.getElementById("blueval").innerHTML = blue;
};
myFunction();

function greenFunction() {
    var green = Math.floor((Math.random() * 12) + 1);
    document.getElementById("greenval").innerHTML = green;
};
greenFunction();

function redFunction() {
    var red = Math.floor((Math.random() * 12) + 1);
    document.getElementById("redval").innerHTML = red;
};
redFunction();

function yellowFunction() {
    var yellow = Math.floor((Math.random() * 12) + 1);
    document.getElementById("yellowval").innerHTML = yellow;
};
yellowFunction();

};
