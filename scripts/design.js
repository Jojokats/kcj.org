$(document).ready(function () {
    $(".bg-empty").height($("#myCarousel .active:first").children().height());
    var size = $("#myCarousel img").length;
    for(var i=0; i<size; i++){
      $("#myCarousel img").eq(i).load(function () {
          var image_h = this.height;
          $(".bg-empty").height(image_h + 100);
      });
    }

    $(window).on('resize', function () {
        $("#myCarousel .active:first").children().trigger('load');
    }).trigger('resize');

    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
      var opacity = scrollTop / (scrollTop + 100);
      $(".bg-empty").each(function() {
        if(opacity < 1){
          $(this).css("opacity", opacity);
        }
      });
    }).scroll();
});
