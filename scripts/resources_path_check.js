var g = {};
$(document).ready(function() {
  g.links = document.getElementsByClassName('resources_link');

 if (window.navigator.platform.substring(0,3) === "Win") {
      set_path();
  }
});
function set_path() {
  g.temp = [];
  var reg = new RegExp('.windows.')
  for (var i = 0; i < g.links.length; i++) {
    g.temp[i] = g.links[i].href;
    g.temp[i].replace(reg, "hiii");
    console.log(g.temp[i]);
  }
  for (var i = 0; i < g.links.length; i++) {
  //  g.links[i].href = "";
    $(g.links[i]).removeAttr("href");
  }
  for (var i = 0; i < g.links.length; i++) {
    //g.links[i].href = g.temp[i]
  }
}
