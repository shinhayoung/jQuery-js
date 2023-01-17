var duration = 400;

$(".title").click(function() {
  $(".music").slideDown(duration);
});

$(".music li").click(function() {
  var $this = $(this);
  var index = $this.index();
  var title = $this.attr("title");
  
  $(".title").text(title);
  $(".music").slideUp(duration);
  $(".container-cover-src").eq(index)
  .addClass("highlight");
  $(".container-cover-src").not($(".container-cover-src").eq(index)).removeClass("highlight");
  
});