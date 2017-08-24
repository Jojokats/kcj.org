var g = {};
$(document).ready(function() {
  console.log(g.lang + " <====");
  g.links = $('.resources_link');
  g.mac = "mac";

 if (window.navigator.platform.substring(0,3) == "Mac") {
      set_path(g.mac);
  }

});

function set_path (path) {
  for (var i = 0; i < g.links.length; i++) {
    g.links[i].href.replace("windows", "mac");
  }
}
