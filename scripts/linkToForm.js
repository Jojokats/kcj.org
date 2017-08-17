$(function(){
  var formCompleted = $.cookie('formCompleted');

  if(!formCompleted && formCompleted != 'true'){
    console.log('formCompleted: ' + formCompleted);
    window.location.href = '/form.html';
  }
});
