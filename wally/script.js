var height = 185;

var updateHeight = function( amount ) {
  height = height + amount;
  $(".height").text( height + "cm" );
};



updateHeight(0);

$(".arr-top").click( function() {
  updateHeight(1);
});

$(".arr-bottom").click( function() {
  updateHeight(-1);
});