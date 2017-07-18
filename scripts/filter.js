'use strict';

var g = {};
document.addEventListener('DOMContentLoaded', init);

function init(){
  g.list = document.getElementsByClassName('list')[0];
  g.province = document.getElementById('province');
  g.province.addEventListener('change', filter);

  g.type = document.getElementById('type');
  g.type.addEventListener('change', filter);

  g.month = document.getElementById('month');
  g.month.addEventListener('change', filter);
  
  g.notFound = document.getElementById('notFound');
  hide(g.notFound, true);

/*
  g.filterBtn = document.getElementById('filterBtn');
  g.filterBtn.addEventListener('click', filter);*/
}

/**
 * Filter the base on the user selected on the workshop page
 */
function filter(){
  var provinceSelected = g.province.options[g.province.selectedIndex].value.toLowerCase().trim();
  var typeSelected = g.type.options[g.type.selectedIndex].value.toLowerCase().trim();
  var monthSelected = g.month.options[g.month.selectedIndex].value.toLowerCase().trim();

  var listItems = g.list.getElementsByClassName('list-item');
  for(var i=0; i<listItems.length; i++){
    var type = listItems[i].getElementsByClassName('type')[0];
    var location = listItems[i].getElementsByClassName('location')[0];
    var date = listItems[i].getElementsByClassName('date')[0];
    if(type){
      type = type.innerHTML.toLowerCase().trim();
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

  //  console.log(location);

    if(type.indexOf(typeSelected) > -1  && location.indexOf(provinceSelected) > -1
        && date.indexOf(monthSelected) > -1){
      hide(listItems[i], false);
    } else {
      hide(listItems[i], true);
    }
  }

  noItemFond(listItems);
}

function noItemFond(listItems){

  var isDisplay = false;
  for(var i=0; i<listItems.length; i++){
    if(listItems[i].style.display === ''){
      isDisplay = true;
    }
  }

  if(isDisplay == false){
    hide(g.notFound, false);
  }
}

function hide(element, hide){
  if(hide){
    element.style.display = 'none';
  } else {
    element.style.display = '';
  }
}
