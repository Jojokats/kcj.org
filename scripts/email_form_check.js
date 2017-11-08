/**
* Checks if there is a coocki saved and if so this means
* the user has been redirected to continue filling out the form
* to obtain the newsLetter. Therefore the email within the coockie
* is placed in the email input box, this is done so the user dose
* not have to enter his/her email once again.
*/
$(document).ready(function() {
var email = $("#mce-EMAIL");
if($.cookie("newslleter_email")){
  $(email).val($.cookie("newslleter_email"));
}
});
