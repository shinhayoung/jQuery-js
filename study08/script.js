var adobeTypes = [
  {
    "name" : "Photoshop",
   "color" : "#51b3ee"
  },
  {
    "name" : "Illustrator",
   "color" : "#eeb24f"
  },
  {
    "name" : "Indisign",
   "color" : "#ce4d97"
  },
  {
    "name" : "Apec",
   "color" : "#bb8de3"
  },
  {
    "name" : "Figma",
   "color" : "#a93127"
  } 
];

var current = 0;

$(".adobe li").children().fadeIn(800);

$(".adobe li").click(function() {
  current = $(this).index();
  adobeType = adobeTypes[current];
  
  $(this).children().addClass("active");
  $(".adobe li").not(this).children().removeClass("active");
  
  $(".balloon h1").text(adobeType.name);
  $(".balloon h1").css("color", adobeType.color);
});

$(".prev").click(function() { 
  current = current - 1;

  $(".adobe li").eq(current).find(".adobe-cover").addClass("active");
  $(".adobe li").not($(".adobe li").eq(current)).find(".adobe-cover").removeClass("active");

  $(".balloon h1").text(adobeTypes[current].name);
  $(".balloon h1").css("color", adobeTypes[current].color);
});

$(".next").click(function() {
  current = current + 1; 
  
  $(".adobe li").eq(current).find(".adobe-cover").addClass("active");
  $(".adobe li").not($(".adobe li").eq(current)).find(".adobe-cover").removeClass("active");

  $(".balloon h1").text(adobeTypes[current].name);
  $(".balloon h1").css("color", adobeTypes[current].color);  
});


