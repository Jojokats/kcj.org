
function FFSetIframeSize(t, e) {
  var n = document.getElementById("ffEmbedFrame");
  n.height = t, n.width = e
}


$(function(){
    /*var i = document.getElementById("ffEmbedFrame");
    i = i.contentWindow ? i.contentWindow : i.contentDocument.document
        ? i.contentDocument.document : i.contentDocument, i.document.open(),
        i.document.write('<script type="text/javascript" id="jsFastForms" src="https://fastforms.visualantidote.com/FormEngine/Scripts/Main.js?d=1hxjZnYWCzf-TIQhYCdcBo5gc3MmXUAwTjNnh7qe6UMZ1yStEut73-d5V1oz-Y4J"></'
        + 'script>'), i.document.close();
*/
/*
    $.when($.get('https://fastforms.visualantidote.com/FormEngine/EngineFrame/Index?d=1hxjZnYWCzf-TIQhYCdcBo5gc3MmXUAwTjNnh7qe6UMZ1yStEut73-d5V1oz-Y4J')
    , $.get('https://fastforms.visualantidote.com/FormEngine/EngineFrame/GenerateCaptcha')
    , $.get('https://fastforms.visualantidote.com/FormEngine/Scripts/Main.js?d=1hxjZnYWCzf-TIQhYCdcBo5gc3MmXUAwTjNnh7qe6UMZ1yStEut73-d5V1oz-Y4J')).then(function () {
*/

/*    $.ajax({
      url: 'https://fastforms.visualantidote.com/FormEngine/Scripts/Main.js?d=1hxjZnYWCzf-TIQhYCdcBo5gc3MmXUAwTjNnh7qe6UMZ1yStEut73-d5V1oz-Y4J',
      dataType: 'script',
      success: success
    });
    */
      //$(document).ajaxStop(function(){

    /*
    $(document).ajaxComplete(function(){
      console.log('ajax stop');
    });*/
    //console.log(dvFastForms);

  }
);

function success(){
  console.log('loading completed');

  /*var btnsubmit = i.document.getElementById('btnsubmit');
  console.log(btnsubmit);
  btnsubmit.addEventListener('click', function(){
    console.log('btnsubmit clicked');
    $.cookie('formCompleted', true, { expire: 365, path: '/'});
    window.location.href = 'resources.html';
  });*/
}
