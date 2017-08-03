
var g = {};
$(function(){

  g.btnsubmit = $('#btnsubmit');
  g.btnsubmit.click(function(){
    $.cookie('formCompleted', 'true', { expires: 365, path: '/' });
  });
  //console.log(btn);
});
