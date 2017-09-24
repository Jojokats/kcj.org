
var g = {};
$(document).ready(function(){
  mobileScreen();
  if($('#language .active').text() === 'EN'){
    g.videoId = '66cZxGiGlI4';
  } else {
    g.videoId = '66cZxGiGlI4';
  }

  var playBtn = $('#playBtn');
  playBtn.on('click', playFullVideo);
  playBtn.on('click', removeVideoOverlay);

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


function onYouTubePlayerAPIReady() {
      g.player = new YT.Player('ytplayer', {
        height: screen.height,
        width: screen.width,
        videoId: g.videoId,
        playerVars: {
            controls: 0,
            autoplay: 0,
            loop: 1,
            controls: 0,
            showinfo: 0,
            autohide: 1,
            modestbranding: 1,
            cc_load_policy: 0, // Hide closed captions
            iv_load_policy: 3,  // Hide the Video Annotations
            vq: 'hd1080',
            rel: 0
          }
      });
}

function mobileScreen(){
  var screenWidth = $(window).width();
  var $mobile_hide = $('.mobile-hide');
  var $playBtn = $('#playBtn');
  if (screenWidth < 600){
    $mobile_hide.hide();
    $('.content').css('top', '20%');
    $('.bg-empty').css('height', '40%');
    $playBtn.addClass('pos-absolute');
  } else {
    $mobile_hide.show();
    $('.content').css('top', '35%');
    $('.bg-empty').css('height', '90%');
    $playBtn.removeClass('pos-absolute');
  }
}

function playFullVideo(){
  // $('.bg-empty').hide();
  $('#ytplayer').show();
  // $('#ytplayer').height('90%');
  // hide(g.player, false);
  g.player.playVideo();

}

function removeVideoOverlay(){
  var overlays = $('.video-overlay');
  for(var i = 0; i < overlays.length; i++){
    hide(overlays.get(i), true);
  }
}

function hide(element, hide){
  if(hide){
    element.style.visibility = 'hidden';
  } else {
    element.style.visibility = '';
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
