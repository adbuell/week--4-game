window.onload = function () {
var wins = 0;
var loses = 0;
var randomNumber = Math.floor(Math.random() * 101) + 19;
var yourNumber = 0;

document.getElementById("randomnumber").innerHTML = randomNumber;

document.getElementById("yournumber").innerHTML = yourNumber;

var blue = Math.floor((Math.random() * 12) + 1);
var green = Math.floor((Math.random() * 12) + 1);
var red = Math.floor((Math.random() * 12) + 1);
var yellow = Math.floor((Math.random() * 12) + 1);





$(“#blue”).click(function(){
   yourNumber = yourNumber + blue
   // blueFunction()
   $(“#yournumber”).html(yourNumber)
   check();
});

$(“#green”).click(function(){
   yourNumber = yourNumber + green
   // $(“#yournumber”).text(parseInt($(“#greenval”).text()) + parseInt($(“#yournumber”).text()));
   check();
   console.log(yourNumber)
   $(“#yournumber”).html(yourNumber);
 });

 $(“#red”).click(function(){
   //  $(“#yournumber”).text(parseInt($(“#redval”).text()) + parseInt($(“#yournumber”).text()));
   yourNumber = yourNumber + red
   check();
    console.log(yourNumber)
    $(“#yournumber”).html(yourNumber)
  });

  $(“#yellow”).click(function(){
   yourNumber = yourNumber + yellow
   //   $(“#yournumber”).text(parseInt($(“#yellowval”).text()) + parseInt($(“#yournumber”).text()));
     check();
     console.log(yourNumber)
     $(“#yournumber”).html(yourNumber)
   });

   console.log(yourNumber)
   // $().HTML(yourNumber)

   function check() {
      if (yourNumber === randomNumber) {
          console.log(“yourNumber = ” + yourNumber)
          console.log(“randomNumber - ” + randomNumber)
      wins += 1
      $(“#wins”).text(wins);
      }
      else if ($(“yourNumber”).text()>$(“randomNumber”).text()) {
      loses += 1
      $(“#loses”).text(loses);
      }
    }
    }
    // function check() {
    //   if (yourNumber==randomNumber){
    //   wins += 1
    //   console.log(wins);
    //   $("#wins").text("helllooo");
    // }else (console.log("ehy"))
    // }
    //   else if ("#yourNumber").text()>$("#randomNumber").text()) {
    //   loses += 1
    //   $("#loses").text(loses);
    //   }
    // }

// $("#blue").click(function(){
//    $("#yournumber").text(parseInt($("#blueval").text()) + parseInt($("#yournumber").text()));
//    check();
//  });
//
//  $("#green").click(function(){
//     $("#yournumber").text(parseInt($("#greenval").text()) + parseInt($("#yournumber").text()));
//     check();
//   });
//
//   $("#red").click(function(){
//      $("#yournumber").text(parseInt($("#redval").text()) + parseInt($("#yournumber").text()));
//      check();
//    });
//
//    $("#yellow").click(function(){
//       $("#yournumber").text(parseInt($("#yellowval").text()) + parseInt($("#yournumber").text()));
//       check();
//     });



// function blueFunction() {
//     $("#blueval").text(blue);
// };
// blueFunction();
//
// function greenFunction() {
//     $("#greenval").text(green);
// };
// greenFunction();
//
// function redFunction() {
//     $("#redval").text(red);
// };
// redFunction();
//
// function yellowFunction() {
//     $("#yellowval").text(yellow);
// };
// yellowFunction();
//
// };
