'use strict';
var g = {};

$(function(){
  g.s = document.getElementsByClassName('form-control')[0];
  g.$type = $('#type');

  if(g.s){
    $(g.s).change(scroll);
  }
});

function scroll(e){
  var positionabout = $(this[this.selectedIndex].value).offset().top - 80;
  $("html, body").animate({scrollTop:positionabout}, '500', 'swing');
}
