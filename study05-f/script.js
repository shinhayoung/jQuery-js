var footerSrc = ".example-footer-src"
var exampleMain = ".example-main"
var text = ["Pear", "Checker", "Bamboo", "School", "Leaf", "Forest"]

$(footerSrc).click(function() {
  $(this).addClass("border");
  $(footerSrc).not(this).removeClass("border");
});

$(footerSrc).eq(0).click(function() {
  $(exampleMain).css("background-image","url(images/b01.png)");
  $(".example-main h1").text(text[0]);
});

$(footerSrc).eq(1).click(function() {
  $(exampleMain).css("background-image","url(images/b02.png)");
  $(".example-main h1").text(text[1]);
});

$(footerSrc).eq(2).click(function() {
  $(exampleMain).css("background-image","url(images/b03.png)");
  $(".example-main h1").text(text[2]);
});

$(footerSrc).eq(3).click(function() {
  $(exampleMain).css("background-image","url(images/b04.png)");
  $(".example-main h1").text(text[3]);
});

$(footerSrc).eq(4).click(function() {
  $(exampleMain).css("background-image","url(images/b05.png)");
  $(".example-main h1").text(text[4]);
});

$(footerSrc).eq(5).click(function() {
  $(exampleMain).css("background-image","url(images/b06.png)");
  $(".example-main h1").text(text[5]);
});

