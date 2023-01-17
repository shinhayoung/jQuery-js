( function($) {
  var posX = 0;
  var speed = 0;
  $( function() {
    $world = $(".world");
    $cooper = $(".cooper");
    go = window.setInterval( function() {    
      posX = posX - speed;  
      $world.css("background-position", posX);
      }, 100);
    
    $(window).keydown( function( event ) {
      if( event.keyCode == 32 ){
        speed = + 30;
        go();
      };   
    });
    
    $(window).keydown( function( event ) {
      if( event.keyCode == 39 ){
        speed = speed + 10;
        go();
      };
    });

    $(window).keydown( function( event ) {
      if( event.keyCode == 74 ){
        $cooper
               .animate({bottom: 50})
               .animate({bottom: 20});
      };
    });
    
  });
})(jQuery);