var show = "show"
var delay = 300
var classes = 400

$(".container .box").eq(0).delay(delay).addClass(show, classes);
$(".container .box").eq(1).delay(delay * 2).addClass(show, classes);
$(".container .box").eq(2).delay(delay * 3).addClass(show, classes);

var result = ["empty","empty","empty"];

var reload = function() {
  var randomNumber = Math.floor(Math.random() * 3);
  result = ["empty","empty","empty"];
  result[randomNumber] = "gold";
  $(".container .box").attr("src","images/box.png");
};

reload();

$(".reload").click(reload);

$(".container .box").click(function() {
  var index = $(this).index();
  $(this).attr("src","images/" + result[index] + ".png");
});

