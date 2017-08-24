var g = {};
$(document).ready(function() {
  g.links = document.getElementsByClassName('resources_link');

 if (window.navigator.platform.substring(0,3) === "Win") {
      set_path();
  }
});
function set_path() {
  g.temp = [];
  for (var i = 0; i < g.links.length; i++) {
    g.temp[i] = g.links[i].href;
    g.temp[i].replace("windows", "hiii");
  }
  for (var i = 0; i < g.links.length; i++) {
  //  g.links[i].href = "";
    $(g.links[i]).removeAttr("href");
    console.log(g.links[i].href);
  }
  for (var i = 0; i < g.links.length; i++) {
    g.links[i].href = g.temp[i]
  }
}
