$(function(){
    var interval = setInterval(function(){
      var btnok = document.getElementsByClassName('ff-ui-dialog-buttonset')[0];
      if(btnok){
        clearInterval(interval);
        btnOkHandler(btnok);
      }
    }, 1000);
  });
  
  function btnOkHandler(btn){
    btn.addEventListener('click', function(){
      $.cookie('formCompleted', true, { expire: 365, path: '../'});
      location = 'ressources.html';
    });
  }
  