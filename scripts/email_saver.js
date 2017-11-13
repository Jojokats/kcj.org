/**
* A coockie is made when a user submits there email to recive the
* newsLetter, they are redirect to the contact page to continue filling
* out the form. The coocki is used for them not to input ther email once again.
*/
$(document).ready(function() {
  var btn = $(".submit_email");
  var lang = document.getElementById("language").getElementsByClassName("active")[0].children[0].innerHTML;
  //on submit the email within the input field is checked if it has the correct format.
  $(btn).click(function(e) {
    e.preventDefault();
    var email = this.parentElement.children[0]
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if($(email).val() !== '' && regex.test($(email).val())){
      $.cookie("newslleter_email", email.value);
      //redirect to the english contact page.
      if(lang == "EN") {
      window.location.href = "contact.html#mc_embed_signup_scroll";
      //redirect to the french contact page.
    } else if (lang == "FR") {
      console.log("FR");
      window.location.href = "nous_joindre.html#mc_embed_signup_scroll";
      }
    }
  });
});
