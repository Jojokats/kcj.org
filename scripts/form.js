$(function(){
  var interval = setInterval(function(){
    var btnok = document.getElementsByClassName('ff-btn-submit')[0];
    console.log(btnok);
    if(btnok){
      clearInterval(interval);
      btnOkHandler(btnok);
    }
  }, 1000);
});

function btnOkHandler(btn){
  btn.addEventListener('click', function(){
    console.log("btn clicked");
    // window.SubmitData()
    $.cookie('formCompleted', true, { expire: 365, path: '/'});

    console.log(document.cookie);
    location = 'resources.html';
  });
}
