'use strict';

var g = {};
document.addEventListener('DOMContentLoaded', init);

function init(){
  g.list = document.getElementsByClassName('list')[0];
  g.province = document.getElementById('province');
  g.type = document.getElementById('type');
  g.month = document.getElementById('month');

  g.filterBtn = document.getElementById('filterBtn');
  g.filterBtn.addEventListener('click', filter);
}
/*
var g = {};

$(document).ready(function(){
    g.province = document.getElementById('province');
    g.type = document.getElementById('type');
    g.month = document.getElementById('month');

    g.filterBtn = $('#filterBtn');
    g.filterBtn.click(filter);

    //g.filterBtn = document.getElementById('filterBtn');
  }
);
*/
function filter(){
  var provinceSelected = g.province.options[g.province.selectedIndex].value.toLowerCase();
  var typeSelected = g.type.options[g.type.selectedIndex].value.toLowerCase();
  var monthSelected = g.month.options[g.month.selectedIndex].value.toLowerCase();

  var listItems = g.list.getElementsByClassName('list-item');
  console.log(listItems.length);
  for(var i=0; i<listItems.length; i++){
    var type = listItems[i].getElementsByClassName('type')[0].innerHTML.toLowerCase();
    var location = listItems[i].getElementsByClassName('location')[0].firstElementChild;
    var date = listItems[i].getElementsByClassName('date')[0].firstElementChild;
  //  console.log(location.firstElementChild.className);
    if(location){
      location = location.className.toLowerCase();
    } else {
      location = '';
    }
    if(date){
      date = date.className.toLowerCase();
    } else {
      date = '';
    }
    if(type.trim().indexOf(typeSelected.trim()) > -1
        && location.trim().indexOf(provinceSelected.trim()) > -1
        && date.trim().indexOf(monthSelected.trim()) > -1){
      listItems[i].style.display = '';
    } else {
      listItems[i].style.display = 'none';
    }

  }
}


function sortByProvinces(btn){

  var provinceOptions = {
    valueNames: [ 'AB', 'BC', 'ON', 'QC' ]
  };

  var userList = new List('filter', provinceOptions);
}
