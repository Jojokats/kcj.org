'use strict';
var g = {};

$(function(){
  g.$type = $('#type');

  if(g.$type){
    g.$type.on('change', scroll);
  }
});

function scroll(){
  var positionabout = $(this[this.selectedIndex].value).offset().top - 90;
  $("html, body").animate({scrollTop:positionabout}, '500', 'swing');
}
