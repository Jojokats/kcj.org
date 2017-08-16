var g = {};
$(document).ready(function() {
g.email = document.getElementsByClassName("email_input")[0];
if($.cookie("newslleter_email")){
  $(g.email).val($.cookie("newslleter_email"));
}
});
