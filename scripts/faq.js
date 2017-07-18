  var g = {};
$(document).ready(function() {
  init();
});

function init() {
  g.titles = document.getElementsByClassName("panel-title");


  $(g.titles).click(function(e) {
    var target = e.target || e.srcElement;
    target = target.parentElement.parentElement;

    if(target.className == "panel-title glyphicon glyphicon-triangle-bottom") {
      for (var i = 0; i < g.titles.length; i++) {
        g.titles[i].className = "panel-title glyphicon glyphicon-triangle-bottom";
      }
      target.className = "panel-title glyphicon glyphicon-triangle-top";
    } else if (target.className == "panel-title glyphicon glyphicon-triangle-top") {
      for (var i = 0; i < g.titles.length; i++) {
        g.titles[i].className = "panel-title glyphicon glyphicon-triangle-bottom";
      }
      target.className = "panel-title glyphicon glyphicon-triangle-bottom";
    }
  });


}
