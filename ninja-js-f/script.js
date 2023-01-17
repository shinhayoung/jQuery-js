var $title = $(".accordion-title")

$title.click(function() {
  var $this = $(this);
  $this.addClass("show").next().slideDown(400);
  $title.not(this).removeClass("show").next().slideUp(400);

  $this.addClass("accordion-title-click");
  $title.not(this).removeClass("accordion-title-click");
})