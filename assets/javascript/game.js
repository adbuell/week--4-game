window.onload = function () {
var wins = 0;
var loses = 0;
var randomNumber = Math.floor(Math.random() * 101) + 19;
var yourNumber = 0;

document.getElementById("randomnumber").innerHTML = randomNumber;

document.getElementById("yournumber").innerHTML = yourNumber;

function check() {
  if ($("yourNumber").text()==$("randomNumber").text()) {
  wins += 1
  $("#wins").text(wins);
  }
  else if ($("yourNumber").text()>$("randomNumber").text()) {
  loses += 1
  $("#loses").text(loses);
  }
}

$("#blue").click(function(){
   $("#yournumber").text(parseInt($("#blueval").text()) + parseInt($("#yournumber").text()));
   check();
 });

 $("#green").click(function(){
    $("#yournumber").text(parseInt($("#greenval").text()) + parseInt($("#yournumber").text()));
    check();
  });

  $("#red").click(function(){
     $("#yournumber").text(parseInt($("#redval").text()) + parseInt($("#yournumber").text()));
     check();
   });

   $("#yellow").click(function(){
      $("#yournumber").text(parseInt($("#yellowval").text()) + parseInt($("#yournumber").text()));
      check();
    });

function blueFunction() {
    var blue = Math.floor((Math.random() * 12) + 1);
    $("#blueval").text(blue);
};
blueFunction();

function greenFunction() {
    var green = Math.floor((Math.random() * 12) + 1);
    $("#greenval").text(green);
};
greenFunction();

function redFunction() {
    var red = Math.floor((Math.random() * 12) + 1);
    $("#redval").text(red);
};
redFunction();

function yellowFunction() {
    var yellow = Math.floor((Math.random() * 12) + 1);
    $("#yellowval").text(yellow);
};
yellowFunction();

};
