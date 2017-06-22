$(document).ready(function () {
    "use strict";

    /**
     * Set the height of the bg-empty class resposive the size of the image_h
     * in the carousel.
     */
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

    /**
     * When the user scroll top/down, the opacity of the black background-color
     * on the class bg-empty resposive to the scroll. For example, if the user
     * scroll down, the background-color is getting darker and vise-versa.
     */
    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
      var opacity = scrollTop / (scrollTop + 100);
      var carousel_top = $("#carousel").css("top");
      var top = parseInt(carousel_top.substr(0, carousel_top.indexOf("p")));
      $(".bg-empty").each(function() {
        if(opacity < 1){
          $(this).css("opacity", opacity);
        }
      });
    }).scroll();
});
