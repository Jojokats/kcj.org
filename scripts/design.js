$(document).ready(function() {
  "use strict";

  if($(document).width() < 450){
    $('#newsLetter h2').replaceWith('<h3 class="text-uppercase text-darkblue">Never miss a thing! <strong>Sign up</strong> for our newsletter</h3>');;
  }
});
