var g = {};
$(document).ready(function() {
  g.btn = document.getElementsByClassName("submit_email");
  g.lang = document.getElementById("language").getElementsByTagName("li");
$(g.btn).click(function(e) {
  e.preventDefault();
  g.email = this.parentElement.children[0]
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if($(g.email).val() !== '' && regex.test($(g.email).val())){
    $.cookie("newslleter_email", g.email.value);
    window.location.href = "contact.html#mc_embed_signup_scroll";
  }
});
});
