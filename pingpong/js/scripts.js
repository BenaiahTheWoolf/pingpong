//user interface logic
$(document).ready(function() {
$("form#display").submit(function(event) {
  event.preventDefault();
  var display = parseInt($("input#integer").val());
  var result = answer(display);
  $(".Push").text(result);

});
  });

  //business logic
  var answer = function(display){
    for(i=1; i<=display; i++){
      // if the number is divisible by 15, write ping pong
      if ( i % 15 === 0) {
        console.log("pingpong")
        $(".Push").prepend("<li>" + "pingpong" + "</li>");
        //return pingpong
      }
      //if the number is divisible by 3
      else if ( i % 3 === 0) {
        $(".Push").prepend("<li>" + "ping" + "</>");
        //return ping
        }
        //if the number is divisible by 5
        else if ( i % 5 === 0) {
          $(".Push").prepend("<li>" + "pong" + "</>");
          // return pong
        }
        //if the number is not divisible by anything
        else {
          console.log("conto");
          $(".Push").prepend("<li>" + i + "</>")
          //will return i
        }
    }
  }



//the menu//

$(document).ready(function() {
  $("#open-menu").click(function() {
    $("aside").animate({
      "left":0}, 2000);
  });
});
$("#close-menu").click(function() {
  $("aside").animate({
    "left":-10000}, 2000);
});
