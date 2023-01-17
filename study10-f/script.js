var heros = ["IRONMAN", "CAPTAIN", "HULK", "BLACKWIDOW", "THOR"];
var active = "active";
var select = "select";
var $heroName = $(".heroname");
var $conItem = $(".container-item");
var current = 0;
var delay = 500;
var duration = 3000;
var show = "show";
var selectCharacter = function() {
  var heroName = heros[current]; 
  var $current = $conItem.eq(current);
  var $siblings = $conItem.not($current);

  $current.addClass(active).find(".hero-shadow").addClass(select);
  $siblings.removeClass(active).find(".hero-shadow").removeClass(select);

  $heroName.children().text(heroName);
};

$conItem.each(function( index ) {
  $(this)
  .delay(delay * index)
  .addClass(show,duration)
  .click(function() {
    current = $(this).index();
    selectCharacter();
  });
});

$(".prev").click(function() {
  current = current - 1;
  
  if( current < 0 ) {
    current = 4;
  }; 

  selectCharacter();
});

$(".next").click(function() {
  current = current + 1;
  
  if( current > 4 ) {
    current = 0;
  }; 

  selectCharacter();
});
