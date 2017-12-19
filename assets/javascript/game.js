window.onload = function () {
var wins = 0;
var loses = 0;
var randomNumber = Math.floor(Math.random() * 102) + 19;
var yourNumber = 0;
var blue, green, red, yellow;

var blue = Math.floor((Math.random() * 12) + 1);
var green = Math.floor((Math.random() * 12) + 1);
var red = Math.floor((Math.random() * 12) + 1);
var yellow = Math.floor((Math.random() * 12) + 1);



document.getElementById("randomnumber").innerHTML = randomNumber;

document.getElementById("yournumber").innerHTML = yourNumber;

$('#blue').click(function(){
   yourNumber = yourNumber + blue
   // blueFunction()
   $("#yournumber").html(yourNumber)
   check();
});

$('#green').click(function(){
   yourNumber = yourNumber + green
   check();
   console.log(yourNumber)
   $("#yournumber").html(yourNumber);
 });

 $('#red').click(function(){
   yourNumber = yourNumber + red
   check();
    console.log(yourNumber)
    $("#yournumber").html(yourNumber)
  });

  $('#yellow').click(function(){
   yourNumber = yourNumber + yellow
     check();
     console.log(yourNumber)
     $("#yournumber").html(yourNumber)
   });

   console.log(yourNumber)

   function reset() {
     blue = Math.floor((Math.random() * 12) + 1);
     green = Math.floor((Math.random() * 12) + 1);
     red = Math.floor((Math.random() * 12) + 1);
     yellow = Math.floor((Math.random() * 12) + 1);
     randomNumber = Math.floor(Math.random() * 102) + 19;
     yourNumber = 0;
     $("#yournumber").html(yourNumber)

     document.getElementById("randomnumber").innerHTML = randomNumber;
 }

   function check() {
      if (yourNumber === randomNumber) {
          console.log("yourNumber = " + yourNumber)
          console.log("randomNumber - " + randomNumber)
      wins += 1
      $("#wins").text(wins);
      reset();
      }
      else if (yourNumber > randomNumber) {
      loses += 1
      $("#loses").text(loses);
      reset();
      }
      }

    }
