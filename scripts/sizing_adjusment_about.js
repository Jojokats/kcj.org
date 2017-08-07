var g = {};
$(document).ready(function() {

  g.table = document.getElementsByClassName("border-on");
  checkwindowSize();
  $(window).resize(function(){
    checkwindowSize();
  });
});
function checkwindowSize (){
  if($(window).width() < 750 || $(document).width() < 870){
     $(g.table).css("border-left", "none");
  } else if ($(window).width() > 750 || $(document).width() > 878) {
      $(g.table).css("border-left", "thin solid black");
  }
}
