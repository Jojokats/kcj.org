// JS
document.onreadystatechange = function () {
    var state = document.readyState;
    if (state == 'interactive') {
         document.getElementsByClassName('contents').style.visibility="hidden";
    } else if (state == 'complete') {
        setTimeout(function(){
           document.getElementsByClassName('myContainer');
           document.getElementsByClassName('loader').style.visibility="hidden";
           document.getElementById('contents').style.visibility="visible";
        },1000);
    }
  }