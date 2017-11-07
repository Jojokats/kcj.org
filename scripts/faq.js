  var g = {};
  /**
  * Once the DOM is fully loaded the elements containing the
  * the class panel-title are fetched and a onClick handler
  * is set for them.
  */
$(document).ready(function() {
  g.titles = $(".panel-title");
  $(g.titles).on( "click", toggleClicked);
});
  /**
  * Displays the  answear for that specific question.
  */
  function toggleClicked (e) {
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
  }
