
var g = {};
$(document).ready(function(){
  mobileScreen();

  var playBtn = $('#playBtn');
  playBtn.on('click', playFullVideo);
  playBtn.on('click', removeVideoOverlay);

  g.fullVideo = document.getElementById('fullVideo');
  hide(g.fullVideo, true);

  $(window).on('resize', function() {
    mobileScreen();
  }).trigger('resize');

  $(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    e.preventDefault();

    var pos = $id.offset().top - 80;
    $('body, html').animate({scrollTop: pos}, 1000);
  });
});

function mobileScreen(){
  var screenWidth = $(window).width();
  var $mobile_hide = $('.mobile-hide');
  var $playBtn = $('#playBtn');
  if (screenWidth < 900){
    $mobile_hide.hide();
    $playBtn.addClass('pos-absolute');
  } else {
    $mobile_hide.show();
    $playBtn.removeClass('pos-absolute');
  }
}

function playFullVideo(){
  hide(g.fullVideo, false);

  var video = g.fullVideo.getElementsByTagName('video')[0];
  // console.log(video);
  video.play();
  video.muted = false;
}

function removeVideoOverlay(){
  var overlays = $('.video-overlay');
  for(var i = 0; i < overlays.length; i++){
    hide(overlays.get(i), true);
  }
}

function hide(element, hide){
  if(hide){
    element.style.display = 'none';
  } else {
    element.style.display = '';
  }
}
