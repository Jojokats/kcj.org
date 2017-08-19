var g = {};
$(document).ready(function() {
  g.scratch = $("#scratch")[0];
  g.html = $("#html")[0];
  g.python = $("#python")[0];
  g.open = document.getElementById("open");
  g.nav = document.getElementById("mySidenav");
  g.close = $("#close")[0];

  $(g.open).on( "click", function() {
    g.nav.style.width = "18%";
  });
  $(g.close).on( "click", function() {
    console.log("close");
    g.nav.style.width = "0px";
  });


});
