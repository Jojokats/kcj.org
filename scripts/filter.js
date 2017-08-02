'use strict';

var g = {};
$(init);

function init(){
//  g.list = document.getElementsByClassName('list')[0];
  //g.list = $('.list');
//  console.log(g.list);
  g.$listItems = $('.list-item');

  g.$province = $('#province');
  g.$province.on('change', filter);

  g.$type = $('#type');
  g.$type.on('change', filter);

  g.$month = $('#month');
  g.$month.on('change', filter);

  g.$notFound = $('#notFound');
  hide(g.$notFound[0], true);

}

/**
 * Filter the base on the user selected on the workshop page
 */
function filter(){
  var provinceSelected = g.$province.children()[g.$province.prop('selectedIndex')].value.toLowerCase().trim();
  var typeSelected = g.$type.children()[g.$type.prop('selectedIndex')].value.toLowerCase().trim();
  var monthSelected = g.$month.children()[g.$month.prop('selectedIndex')].value.toLowerCase().trim();

  var numItemsDisplay = g.$listItems.length;
  for(var i=0; i<g.$listItems.length; i++){
    var type = g.$listItems.eq(i).find('.type')[0];
    var location = g.$listItems.eq(i).find('.location')[0];
    var date = g.$listItems.eq(i).find('.date')[0];

    if(type && type.firstElementChild){
      type = type.firstElementChild.className.toLowerCase().trim();
    } else {
      type = '';
    }
    if(location && location.firstElementChild){
      location = location.firstElementChild.className.toLowerCase().trim();
    } else {
      location = '';
    }
    if(date && date.firstElementChild){
      date = date.firstElementChild.className.toLowerCase().trim();
    } else {
      date = '';
    }

    if(type.indexOf(typeSelected) > -1  && location.indexOf(provinceSelected) > -1
        && date.indexOf(monthSelected) > -1){
      hide(g.$listItems[i], false);
    } else {
      hide(g.$listItems[i], true);
      numItemsDisplay--;
    }
  }
  if(numItemsDisplay === 0){
    hide(g.$notFound[0], false);
  } else {
    hide(g.$notFound[0], true);
  }
}


function hide(element, hide){
  if(hide){
    element.style.display = 'none';
  } else {
    element.style.display = '';
  }
}
