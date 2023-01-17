(function ($) {
    var data = [
        { "tool": "Photoshop", "skill": 35, "color": "#00b6f5" },
        { "tool": "Illustrator", "skill": 29, "color": "#ffc763" },
        { "tool": "InDesign", "skill": 42, "color": "#ff55a9" },
        { "tool": "AfterEffect", "skill": 92, "color": "#f790ff" },
        { "tool": "Flash", "skill": 14, "color": "#ff2c1e" },
    ];

    $(function () {
        var $graphLi = $(".graph li");

        var excute = function( index ) {
          var $container = $graphLi.eq(index);
          var app = data[index];
          $container
            .find(".graph-contents-name")
            .text(app.tool)
            .css("color",app.color);
          
          $container
            .find(".graph-contents-percent span")
            .css("background-color",app.color)
            .delay( index * 200 )
            .animate({"width":app.skill + "%"})
            .text(app.skill + "%");
        };

        $graphLi.each( function( index ) {
           excute( index ); 
        })
    });
})(jQuery);











