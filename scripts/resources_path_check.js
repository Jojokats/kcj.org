var g = {};
$(document).ready(function() {
  console.log("hi");
  g.links = $('.resources_link');
  g.a = $('.resources_link');
  /* only if the current station the user is using is a mac
  will this boolean be true */
 if (window.navigator.platform.substring(0,3).toLowerCase() === "win") {
   console.log("win")
      set_path();
  }
});
/*
 * changes the href of all the a tags with the class (resources_link)
 * Moreover this function will only be called if the user is using a mac
 * therefor the path to the files must be changed in order to redirect the user to
 * the file that can run on his/her system.
 */
function set_path() {
  g.temp = [];
  /* a tag was causing issues and was not allowing the (.replace()) function to switch
  *  the word windows to mac within the path there for the long way had to be taken. using
  *  string manipulation the desire result achived.
  */
  for (var i = 0; i < g.links.length; i++) {
    g.temp[i] = g.links[i].href.substring(0 , g.links[i].href.indexOf('windows')) + "mac" +
      g.links[i].href.substring(g.links[i].href.indexOf('windows') + 'windows'.length);
    $(g.links[i]).removeAttr("href");
  }
  /*
   *  once the path is corrected the href is re-assigned onto the a tag
  */
  for (var i = 0; i < g.links.length; i++) {
    g.links[i].href = g.temp[i]
  }
}
