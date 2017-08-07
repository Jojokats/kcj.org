var g = {};
console.log("1");
$(document).ready(function() {
g.email = document.getElementsByClassName("email_input")[0];

if($.cookie("newslleter_email")){
  console.log("in if");
  $(g.email).val($.cookie("newslleter_email"));
}
});
