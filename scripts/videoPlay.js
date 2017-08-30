
var g = {};
$(document).ready(function(){
  mobileScreen();

  var playBtn = $('#playBtn');
  playBtn.on('click', playFullVideo);
  playBtn.on('click', removeVideoOverlay);

  g.fullVideo = document.getElementById('fullVideo');
  hide(g.fullVideo, true);

  g.video = g.fullVideo.getElementsByTagName('video')[0];
  g.video.addEventListener('click', toggle);

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
  video.play();
  video.muted = false;

  $('#video').css('max-height', '1500px');
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

// // SELECTION
// const video = document.querySelector('video');
//
// FUNCTIONS
function toggle() {
    g.video.paused ? g.video.play() : g.video.pause();
}

function restart() {
    video.currentTime = 0;
    video.play();
}
//
// // EVENTS
// video.addEventListener('click', toggle);
// video.addEventListener('dblclick', restart);
