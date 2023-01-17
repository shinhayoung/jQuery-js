var $button = $(".button li");

$button.click(function() {
  var $this = $(this);
  var active = "is_active";
  var index = $this.index();
  var duration = 800;
  var delay = 100;
  var $item = $(".item");
  var show = "show";
  var imgEq0 = ".item-src:eq(0)";
  var imgEq1 = ".item-src:eq(1)";
  var imgEq2 = ".item-src:eq(2)";

  $this.addClass(active);
  $button.not(this).removeClass(active);

  $item.eq(index).children(imgEq0).delay(delay).addClass(show,duration);
  $item.eq(index).children(imgEq1).delay(delay * 2).addClass(show,duration);
  $item.eq(index).children(imgEq2).delay(delay * 3).addClass(show,duration);

  $item.not($item.eq(index)).children(imgEq0).delay(delay).removeClass(show,duration);
  $item.not($item.eq(index)).children(imgEq1).delay(delay * 2).removeClass(show,duration);
  $item.not($item.eq(index)).children(imgEq2).delay(delay * 3).removeClass(show,duration);
});