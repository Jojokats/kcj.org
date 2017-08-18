$(function(){
  var formCompleted = $.cookie('formCompleted');
  // 
  // console.log(location.pathname);
  // // console.log(location.);
  // var src = location.href.split('/');
  // var path = '';
  // for(var i = 0; i < src.length - 1; i++){
  //   path += src[i];
  // }
  // console.log(location);
  if(!formCompleted && formCompleted != 'true'){
    // console.log('formCompleted: ' + formCompleted);
    window.location = 'form.html';
  }
});
