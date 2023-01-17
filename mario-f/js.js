var expless = "spring"
var move = "up"
var duration = 1000;
var delay = 1000;
var classes = "show";

$(".logo").delay(400).addClass(expless,1200,"easeOutElastic");

$(".logo").click(function () {
  $(".logo").addClass(move, duration);
  $(".container h1").delay(delay).fadeIn(1200);
  $(".mario").delay(delay * 2).addClass(classes, duration);
  $(".luigi").delay(delay * 3).addClass(classes, duration);
  $(".toad").delay(delay * 4).addClass(classes, duration);
})

$(".mario").click(function () {
  $(".container h1").html("mario");
  $(".container h1").css("color", "red");
})

$(".luigi").click(function () {
  $(".container h1").html("luigi");
  $(".container h1").css("color", "green");
})

$(".toad").click(function () {
  $(".container h1").html("toad");
  $(".container h1").css("color", "gold");
})