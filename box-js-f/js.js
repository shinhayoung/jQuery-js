var show  = "show"
var delay = 300
var classes  = 400

$(".container .box").eq(0).delay(delay).addClass(show,classes);
$(".container .box").eq(1).delay(delay * 2).addClass(show,classes);
$(".container .box").eq(2).delay(delay * 3).addClass(show,classes);


$(".container .box").eq(0).click(function(){
  $(".container .box").eq(0).attr("src","images/empty.png");
  $(".game h1").html("you lose");
});

$(".container .box").eq(1).click(function(){
  $(".container .box").eq(1).attr("src","images/empty.png");
  $(".game h1").html("you lose");
});

$(".container .box").eq(2).click(function(){
  $(".container .box").eq(2).attr("src","images/gold.png");
  $(".game h1").html("you win");
});