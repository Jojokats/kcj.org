var g = {};
$(document).ready(function() {
  g.email = document.getElementsByClassName("email_input")[0];
  g.btn = document.getElementsByClassName("submit_email")[0];
//valid
console.log("1");
$(g.btn).click(function(e) {
  console.log("2");
  e.preventDefault();
  validateEmail();
  //$.cookie("newslleter_email", g.email.value, { expires: 1, path: '/' });
  $.cookie("newslleter_email", g.email.value);
  window.location.href = "contact.html";

});
});

function validateEmail() {

}
