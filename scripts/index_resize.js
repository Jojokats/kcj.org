var g = {};
$(document).ready(function() {

  g.elements = $(".toggle-padding");

  checkwindowSize();
  $(window).resize(function(){
    checkwindowSize();
  });
});
function checkwindowSize (){
  if($(window).width() < 950){
    for (var i = 0; i < g.elements.length; i++) {
      $(g.elements[i]).removeClass( "padding-top-l" );
    }

  } else if ($(window).width() > 950 ) {
    for (var i = 0; i < g.elements.length; i++) {
      $(g.elements[i]).addClass( "padding-top-l" );
    }

  }
}
