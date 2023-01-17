// 전역변수 Global Variable
var current = 0;

$(".gun").click( function() {
    $(".sunban-item img").eq(current).addClass("die", 400);
    current = current + 1;
});

$(".sunban-item img").hover( function() {
    $(this).addClass("die",400);
});

$(".money-item").click( function() {
    $(this).addClass("paid", 400, function() {
        $(".sunban-item img").removeClass("die", 400);
        current = 0;
    });
}); 
