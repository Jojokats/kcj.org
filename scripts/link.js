$(function(){
  $('#helpSec a').click(function(e){
    e.preventDefault();
    var page = this.getAttribute('href');
  //  console.log(page);
    location.href = page;
    $("html, body").animate({scrollTop:positionabout}, '500', 'swing');
  });
});
