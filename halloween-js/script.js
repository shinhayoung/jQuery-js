/* 즉시실행함수와 jQuery의 도큐먼트레디도 한번 활용해보세요 */
( function($) {
  $( function() {
    var gnbScroll = $(".gnb").offset().top;
    var $section = $("[data-section]");

    $(".gnb").find("a").click( function(event) {
      event.preventDefault();
      var index = $(this).parent().index();
      var currentSection = $section.eq(index);
      var posY = currentSection.offset().top;

      $("html,body").animate({
        scrollTop : posY - 200
      });
    });

    $(window).scroll( function() {
      var nowScroll = $(this).scrollTop();

      if( gnbScroll <= nowScroll ){
        $(".gnb").addClass("fixed");
      } else{
        $(".gnb").removeClass("fixed");         
        };
      
        $section.each( function() {
          var start = $(this).offset().top -200;
          var end = start + $(this).height();

          if( nowScroll > start && nowScroll < end ) {
            $(".gnb").eq(index).children("a").addClass("active");

          };



        })
      
    });
   
    
  
  });
})(jQuery);