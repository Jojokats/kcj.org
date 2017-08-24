var g = {};
$(document).ready(function() {
  g.links = document.getElementsByClassName('resources_link');

 if (window.navigator.platform.substring(0,3) === "Mac") {
      set_path();
  }
});

function set_path() {
  for (var i = 0; i < g.links.length; i++) {
    g.links[i].href.replace("windows", "mac");
  }
  console.log(g.links[0].href + " <=======");
}
